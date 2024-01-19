export interface MuscularGroup {
  id: number;
  name: string;
  isSelected?: boolean;
}

export const muscularGroups: MuscularGroup[] = [
  { id: 1, name: 'Peitoral' },
  { id: 2, name: 'Tríceps' },
  { id: 3, name: 'Costas' },
  { id: 4, name: 'Bíceps' },
  { id: 5, name: 'Deltóides' },
  { id: 6, name: 'Pernas' },
  { id: 7, name: 'Glúteos' },
  { id: 8, name: 'Quadríceps' },
  { id: 9, name: 'Posterior de Coxa' },
  { id: 10, name: 'Panturrilha' },
  { id: 11, name: 'Abdomên' },
  { id: 12, name: 'Cardio' },
  { id: 13, name: 'Calistenia' },
]