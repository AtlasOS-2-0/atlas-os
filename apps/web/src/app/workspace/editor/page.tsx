"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditorPage() {
  const router = useRouter();

  const [projectName, setProjectName] =
    useState("");

  const [selectedFile, setSelectedFile] =
    useState("");

  const [content, setContent] =
    useState("");

  useEffect(() => {
    const currentProject = JSON.parse(
      localStorage.getItem(
        "atlas-current-project"
      ) || "null"
    );

    const currentFile =
      localStorage.getItem(
        "atlas-current-file"
      );

    if (!currentProject || !currentFile)
      return;

    setProjectName(
      currentProject.name
    );

    setSelectedFile(
      currentFile
    );

    const allFiles = JSON.parse(
      localStorage.getItem(
        "atlas-files"
      ) || "{}"
    );

    const savedContent =
      allFiles?.[
        currentProject.name
      ]?.[
        currentFile
      ] || "";

    setContent(savedContent);
  }, []);

  const saveFile = () => {
    if (
      !projectName ||
      !selectedFile
    )
      return;

    const allFiles = JSON.parse(
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
    ][selectedFile] = content;

    localStorage.setItem(
      "atlas-files",
      JSON.stringify(
        allFiles
      )
    );

    alert(
      `${selectedFile} saved successfully 💾`
    );
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() =>
            router.push(
              "/workspace"
            )
          }
          className="rounded-lg bg-gray-800 px-4 py-2 hover:bg-gray-700"
        >
          ← Back
        </button>

        <button
          onClick={
            saveFile
          }
          className="rounded-lg bg-green-600 px-6 py-2 hover:bg-green-500"
        >
          Save File
        </button>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          {selectedFile}
        </h1>

        <p className="text-gray-500">
          Project:
          {" "}
          {projectName}
        </p>
      </div>

      <textarea
        value={content}
        onChange={(e) =>
          setContent(
            e.target.value
          )
        }
        className="h-[75vh] w-full rounded-xl border border-gray-800 bg-[#0B0F19] p-6 font-mono outline-none"
        placeholder="Start writing code..."
      />
    </main>
  );
}