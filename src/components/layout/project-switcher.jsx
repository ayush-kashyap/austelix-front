"use client";

import { FolderKanban, Loader2 } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveProjectId } from "@/store/slices/projectSlice";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ProjectSwitcher({ className }) {
  const [isLoading,setIsLoading]=useState(false);
  const [projectList,setProjectList]=useState([]);
  const dispatch = useAppDispatch();
  const activeProjectId = useAppSelector(state=>state.project.activeProjectId);
  const activeProjectName =  useAppSelector(state=>state.project.activeProjectName);


  function onProjectChange(projectId) {
    if (projectId === activeProjectId || isLoading) return;
    dispatch(setActiveProjectId(projectId));
    writeStoredProjectId(projectId);
  }

  // if (CMS_PROJECTS.length === 0) {
  //   return (
  //     <p className={cn("text-xs text-muted-foreground", className)}>
  //       No projects configured
  //     </p>
  //   );
  // }

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Select
        value={activeProjectId ?? undefined}
        onValueChange={onProjectChange}
        disabled={isLoading}
      >
        <SelectTrigger
          className="h-9 w-[180px] gap-2 border-dashed sm:w-[200px]"
          aria-label="Switch project"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-muted-foreground" />
          ) : (
            <FolderKanban className="h-4 w-4 shrink-0 text-muted-foreground" />
          )}
          <SelectValue placeholder="Select project">
            {activeProjectName ?? "Select project"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent align="start">
          {projectList.map((project) => (
            <SelectItem key={project.id} value={project.id}>
              <div className="flex flex-col">
                <span>{project.name}</span>
                {project.description ? (
                  <span className="text-xs text-muted-foreground">
                    {project.description}
                  </span>
                ) : null}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
    </div>
  );
}
