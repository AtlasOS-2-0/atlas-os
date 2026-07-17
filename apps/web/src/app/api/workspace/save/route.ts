import fs from "fs-extra";
import path from "path";

export async function POST(req: Request) {
  try {
    const { project, files } =
      await req.json();

    const workspacePath = path.join(
      process.cwd(),
      "atlas-workspaces",
      project
    );

    await fs.ensureDir(
      workspacePath
    );

    for (const [
      fileName,
      content,
    ] of Object.entries(files)) {
      await fs.outputFile(
        path.join(
          workspacePath,
          fileName
        ),
        content as string
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}