import { useState } from 'react';
import { Card } from '../../ui/Card';
import { useAppSelector, useAppDispatch } from '../../../hooks/useRedux';
import { TaskItem } from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../../ui/Modal';
import { NewTaskForm } from './NewTaskForm';
import { addTask, type TaskState } from '../../../features/dashboard/dashboardSlice';

export function PendingTasksList() {
  const tasks = useAppSelector((state) => state.dashboard.pendingTasks);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddTask = (taskData: { text: string; priority: TaskState['priority'] }) => {
    dispatch(addTask(taskData));
    handleCloseModal(); // Cierra el modal después de añadir la tarea
  };

  return (
    <>
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-secondary-900">Tareas Pendientes</h2>
          <button
            onClick={handleOpenModal}
            className="text-accent-600 hover:text-accent-800"
            aria-label="Añadir nueva tarea"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="space-y-2">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <a href="#" className="text-sm text-accent-600 hover:text-accent-800 block text-center mt-4 font-medium">
          Ver todas las tareas
        </a>
      </Card>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Crear Nueva Tarea">
        <NewTaskForm onCancel={handleCloseModal} onSubmit={handleAddTask} />
      </Modal>
    </>
  );
}
