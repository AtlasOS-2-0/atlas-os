import { Project } from "@/components/projects/CreateProjectModal";

interface RecentProjectsProps {
  projects: Project[];
}

export default function RecentProjects({
  projects,
}: RecentProjectsProps) {
  return (
    <div className="rounded-xl border border-gray-800 p-6">
      <h2 className="mb-4 text-xl font-bold">
        Recent Projects
      </h2>

      <div className="space-y-3">
        {projects.length === 0 ? (
          <div className="text-gray-500">
            No projects created yet.
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg bg-gray-900 p-4 border border-gray-800"
            >
              <div className="font-semibold text-lg">
                {project.name}
              </div>

              <div className="mt-2 text-sm text-gray-400 space-y-1">
                <div>
                  Type:
                  <span className="ml-2 text-blue-400">
                    {project.type}
                  </span>
                </div>

                <div>
                  Stack:
                  <span className="ml-2 text-green-400">
                    {project.stack}
                  </span>
                </div>

                <div>
                  Status:
                  <span className="ml-2 text-yellow-400">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}