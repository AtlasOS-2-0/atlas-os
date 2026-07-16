"use client";

import { useEffect, useState } from "react";

export default function EditorPage() {
  const [projectName, setProjectName] =
    useState("");

  const [fileName, setFileName] =
    useState("");

  const [content, setContent] =
    useState("");

  useEffect(() => {
    const currentProject =
      JSON.parse(
        localStorage.getItem(
          "atlas-current-project"
        ) || "null"
      );

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
  }, []);

  const saveFile = () => {
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

    alert(
      `${fileName} saved successfully ✅`
    );
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
        </div>

        <button
          onClick={saveFile}
          className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-500"
        >
          Save
        </button>
      </div>

      <textarea
        value={content}
        onChange={(e) =>
          setContent(
            e.target.value
          )
        }
        className="h-[80vh] w-full rounded-xl border border-gray-800 bg-[#0B0F19] p-6 font-mono text-sm outline-none"
      />
    </main>
  );
}