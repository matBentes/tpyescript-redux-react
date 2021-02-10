import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem';

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void;
  // loadSucess(data: Repository[]): void;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

const RepositoryList = ({ repositories, loadRequest }: Props) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest]);
  console.log(repositories);
  return  (
    <div>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
