import { exec } from "child_process";
import path from "path";

export async function POST(req: Request) {
  try {
    const { project, command } =
      await req.json();

    const workspacePath = path.join(
      process.cwd(),
      "atlas-workspaces",
      project
    );

    const output = await new Promise<string>(
      (resolve) => {
        exec(
          command,
          {
            cwd: workspacePath,
          },
          (
            error,
            stdout,
            stderr
          ) => {
            if (error) {
              resolve(
                error.message
              );
              return;
            }

            resolve(
              stdout ||
              stderr ||
              "Command finished successfully."
            );
          }
        );
      }
    );

    return Response.json({
      output,
    });
  } catch (error) {
    return Response.json(
      {
        output:
          "Terminal execution failed.",
      },
      {
        status: 500,
      }
    );
  }
}