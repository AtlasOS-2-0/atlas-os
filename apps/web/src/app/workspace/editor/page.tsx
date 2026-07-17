"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

export default function EditorPage() {
  const [projectName, setProjectName] =
    useState("");

  const [fileName, setFileName] =
    useState("");

  const [content, setContent] =
    useState("");
  const [savedContent, setSavedContent] =
    useState("");
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [files, setFiles] =
    useState<string[]>([]);
  const [openTabs, setOpenTabs] =
    useState<string[]>([]);
  useEffect(() => {
    const currentProject =
      JSON.parse(
        localStorage.getItem(
          "atlas-current-project"
        ) || "null"
      ) || {
        name: "scratch",
        type: "Scratch Workspace",
        stack: "Mixed",
        status: "Ready",
      };

    const currentFile =
      localStorage.getItem(
        "atlas-current-file"
      );

    if (
      !currentProject ||
      !currentFile
    )
      return;

    setProjectName(
      currentProject.name
    );

    setFileName(currentFile);

    const allFiles =
      JSON.parse(
        localStorage.getItem(
          "atlas-files"
        ) || "{}"
      );

    const fileContent =
      allFiles[
      currentProject.name
      ]?.[currentFile] || "";

    setContent(fileContent);

    setSavedContent(
      fileContent
    );
    setFiles(
      Object.keys(
        allFiles[currentProject.name] || {}
      )
    );
    setOpenTabs([currentFile]);
  }, []);

  const saveFile = async () => {
    const allFiles =
      JSON.parse(
        localStorage.getItem(
          "atlas-files"
        ) || "{}"
      );

    if (
      !allFiles[projectName]
    ) {
      allFiles[
        projectName
      ] = {};
    }

    allFiles[
      projectName
    ][fileName] = content;

    localStorage.setItem(
      "atlas-files",
      JSON.stringify(
        allFiles
      )
    );
    await fetch(
      "/api/workspace/save",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          project: projectName,
          files:
            allFiles[projectName],
        }),
      }
    );
    setFiles(
      Object.keys(
        allFiles[projectName]
      )
    );
    setSavedContent(
      content
    );
    window.dispatchEvent(
      new Event("atlas-files-updated")
    );

    setOutput(
      `${fileName} saved successfully ✅`
    );
  };
  const createFile = async () => {
    const newFile = prompt(
      "Enter file name"
    );

    if (!newFile) return;

    const allFiles = JSON.parse(
      localStorage.getItem(
        "atlas-files"
      ) || "{}"
    );

    if (!allFiles[projectName]) {
      allFiles[projectName] = {};
    }

    if (
      allFiles[projectName][newFile]
    ) {
      alert(
        "File already exists."
      );
      return;
    }

    allFiles[projectName][newFile] = "";

    localStorage.setItem(
      "atlas-files",
      JSON.stringify(allFiles)
    );

    setFiles(
      Object.keys(
        allFiles[projectName]
      )
    );

    localStorage.setItem(
      "atlas-current-file",
      newFile
    );

    setFileName(newFile);
    setContent("");
    setSavedContent("");

    window.dispatchEvent(
      new Event(
        "atlas-files-updated"
      )
    );

    await fetch(
      "/api/workspace/save",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          project: projectName,
          files:
            allFiles[
            projectName
            ],
        }),
      }
    );
  };

  const runCode = async () => {
    setRunning(true);
    setOutput("Running...");

    try {
      let command = "";

      if (
        fileName.endsWith(".py")
      ) {
        command =
          `python ${fileName}`;
      }

      else if (
        fileName.endsWith(".js")
      ) {
        command =
          `node ${fileName}`;
      }

      else if (
        fileName.endsWith(".ts")
      ) {
        command =
          `npx ts-node ${fileName}`;
      }

      else {
        setOutput(
          "Unsupported file type."
        );
        setRunning(false);
        return;
      }

      const res = await fetch(
        "/api/terminal",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            project:
              projectName,
            command,
          }),
        }
      );

      const data =
        await res.json();

      setOutput(
        data.output
      );
    } catch (err: any) {
      setOutput(
        err.message ||
        "Execution failed."
      );
    }

    setRunning(false);
  };
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            {fileName}
          </h1>

          <p className="text-gray-400">
            {projectName}
          </p>

          {content !==
            savedContent && (
              <p className="text-yellow-400 mt-2">
                Unsaved changes
              </p>
            )}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() =>
              history.back()
            }
            className="rounded-lg bg-gray-700 px-6 py-3 hover:bg-gray-600"
          >
            Back
          </button>

          <button
            onClick={saveFile}
            className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-500"
          >
            Save
          </button>

          <button
            onClick={runCode}
            disabled={running}
            className="rounded-lg bg-green-600 px-6 py-3 hover:bg-green-500 disabled:opacity-50"
          >
            {running ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 h-[75vh]">
        {/* File Explorer */}
        <div className="col-span-1 rounded-xl border border-gray-800 bg-[#0B0F19] p-4 overflow-y-auto">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">
              Files
            </h2>

            <button
              onClick={createFile}
              className="rounded bg-blue-600 px-3 py-1 text-sm hover:bg-blue-500"
            >
              + File
            </button>
          </div>

          {files.map((file) => (
            <div
              key={file}
              onClick={() => {
                const allFiles = JSON.parse(
                  localStorage.getItem(
                    "atlas-files"
                  ) || "{}"
                );

                const newContent =
                  allFiles[projectName]?.[file] || "";

                setFileName(file);
                setContent(newContent);
                setSavedContent(newContent);

                localStorage.setItem(
                  "atlas-current-file",
                  file
                );

                if (
                  !openTabs.includes(file)
                ) {
                  setOpenTabs([
                    ...openTabs,
                    file,
                  ]);
                }
              }}
              className={`mb-2 cursor-pointer rounded-lg p-2 transition ${file === fileName
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
            >
              📄 {file}
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="col-span-3 overflow-hidden rounded-xl border border-gray-800">
          <div className="flex border-b border-gray-800 bg-[#111827] overflow-x-auto scrollbar-thin">
            {openTabs.map((tab) => (
              <div
                key={tab}
                className={`flex items-center gap-2 cursor-pointer px-4 py-2 text-sm ${tab === fileName
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800"
                  }`}
                onClick={() => {
                  const allFiles = JSON.parse(
                    localStorage.getItem(
                      "atlas-files"
                    ) || "{}"
                  );

                  const newContent =
                    allFiles[projectName]?.[tab] || "";

                  setFileName(tab);
                  setContent(newContent);
                  setSavedContent(newContent);

                  localStorage.setItem(
                    "atlas-current-file",
                    tab
                  );
                }}
              >
                <span>{tab}</span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    const updatedTabs =
                      openTabs.filter(
                        (t) => t !== tab
                      );

                    setOpenTabs(updatedTabs);

                    if (tab === fileName) {
                      if (
                        updatedTabs.length > 0
                      ) {
                        const nextTab =
                          updatedTabs[
                          updatedTabs.length - 1
                          ];

                        const allFiles =
                          JSON.parse(
                            localStorage.getItem(
                              "atlas-files"
                            ) || "{}"
                          );

                        const newContent =
                          allFiles[
                          projectName
                          ]?.[nextTab] || "";

                        setFileName(nextTab);
                        setContent(newContent);
                        setSavedContent(
                          newContent
                        );

                        localStorage.setItem(
                          "atlas-current-file",
                          nextTab
                        );
                      } else {
                        setFileName("");
                        setContent("");
                        setSavedContent("");
                        localStorage.removeItem(
                          "atlas-current-file"
                        );
                      }
                    }
                  }}
                  className="text-xs text-gray-300 hover:text-red-400"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <Editor
            height="70vh"
            theme="vs-dark"
            language={
              fileName.endsWith(".py")
                ? "python"
                : fileName.endsWith(".js")
                  ? "javascript"
                  : fileName.endsWith(".ts")
                    ? "typescript"
                    : fileName.endsWith(".json")
                      ? "json"
                      : fileName.endsWith(".html")
                        ? "html"
                        : fileName.endsWith(".css")
                          ? "css"
                          : "plaintext"
            }
            value={content}
            onChange={(value) =>
              setContent(value || "")
            }
          />
        </div>

        {/* Console */}
        <div className="col-span-1 rounded-xl border border-gray-800 bg-[#0B0F19] p-4 overflow-y-auto">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">
              Console
            </h2>

            <button
              onClick={() =>
                setOutput("")
              }
              className="rounded bg-red-600 px-3 py-1 text-xs hover:bg-red-500"
            >
              Clear
            </button>
          </div>

          <pre className="whitespace-pre-wrap text-green-400 text-sm">
            {output || "No output yet."}
          </pre>
        </div>

      </div>
    </main>
  );
}