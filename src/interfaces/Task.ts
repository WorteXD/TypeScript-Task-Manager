/**
 * Represents a single task in the Task Manager application.
 */
export interface Task {
  id: string;         // Unique identifier for the task
  title: string;      // The title of the task
  description?: string; // Optional description of the task
  completed: boolean; // Whether the task is completed
}
