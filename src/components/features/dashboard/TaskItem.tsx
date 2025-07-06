import { clsx } from 'clsx';
import { useAppDispatch } from '../../../hooks/useRedux';
import { toggleTaskCompletion, type TaskState } from '../../../features/dashboard/dashboardSlice';

type TaskItemProps = {
  task: TaskState;
};

// Mapeo de prioridades a colores para el badge
const priorityStyles: { [key: string]: string } = {
  Urgente: 'bg-red-100 text-red-800',
  Media: 'bg-yellow-100 text-yellow-800',
  Normal: 'bg-green-100 text-green-800',
};

export function TaskItem({ task }: TaskItemProps) {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    // Al hacer clic en el checkbox, despachamos la acción a Redux con el ID de la tarea
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <div className="flex items-center justify-between p-2 rounded-md hover:bg-secondary-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="mr-3 h-4 w-4 text-accent-600 border-secondary-300 rounded focus:ring-accent-500"
          aria-labelledby={`task-label-${task.id}`}
        />
        <span
          id={`task-label-${task.id}`}
          className={clsx('text-sm text-secondary-700', {
            'line-through text-secondary-400': task.completed,
          })}
        >
          {task.text}
        </span>
      </div>
      <span className={clsx('text-xs font-medium px-2 py-1 rounded-full', priorityStyles[task.priority])}>
        {task.priority}
      </span>
    </div>
  );
}
