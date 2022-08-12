import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';

import './navigation.styles.scss';

import { ReactComponent as SuezLogo } from '../../assets/suez-logo-1.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart-outline.svg';
import { ReactComponent as BookIcon } from '../../assets/icons/book-outline.svg';
import { ReactComponent as PeopleIcon } from '../../assets/icons/people-outline.svg';
import { ReactComponent as DocumentIcon } from '../../assets/icons/document-text-outline.svg';
import { ReactComponent as ResourcesIcon } from '../../assets/icons/apps-outline.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="links-container">
          <Link className="logo-container" to="/">
            <SuezLogo className="suez-logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/">
              <HeartIcon className="nav-icon" />
              Início
            </Link>
            <Link className="nav-link" to="/apoio-medico">
              <PeopleIcon className="nav-icon" />
              Apoio Médico
            </Link>
            <Link className="nav-link" to="/apoio-medico">
              <ResourcesIcon className="nav-icon" />
              Recursos
            </Link>
            <Link className="nav-link" to="/apoio-medico">
              <DocumentIcon className="nav-icon" />
              Política
            </Link>
            <Link className="nav-link" to="/apoio-medico">
              <BookIcon className="nav-icon" />
              Informações Úteis
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
