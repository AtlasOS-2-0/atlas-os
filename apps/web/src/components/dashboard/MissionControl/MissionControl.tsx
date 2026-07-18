"use client";

import TopStatus from "./TopStatus";
import EngineerPanel from "./EngineerPanel";
import Pipeline from "./Pipeline";
import ActivityFeed from "./ActivityFeed";
import ProjectOverview from "./ProjectOverview";

export default function MissionControl() {
  return (
    <div className="space-y-6">

      <TopStatus />

      <div className="grid gap-6 xl:grid-cols-12">

        <div className="xl:col-span-4">
          <EngineerPanel />
        </div>

        <div className="xl:col-span-8">
          <Pipeline />
        </div>

        <div className="xl:col-span-5">
          <ActivityFeed />
        </div>

        <div className="xl:col-span-7">
          <ProjectOverview />
        </div>

      </div>

    </div>
  );
}