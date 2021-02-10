import React from 'react';
import { Repository } from '../../store/ducks/repositories/types';

interface RepositoryItemProps {
  repository: Repository
}

const RepositoryItem = ({ repository }: RepositoryItemProps ) => {
  return (
    <li>Name: {repository.name}</li>
  );
}

export default RepositoryItem;