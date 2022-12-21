import { useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProtectedRoute from './ProtectedRoute';
import _ from 'lodash';
import DefaultTemplate from '../../templates/DefaultTemplate';

function RouterManager({ routes }) {
  const getRouteContent = useCallback((route) => {
    const Template = _.get(route, 'content.Template', DefaultTemplate);
    const templateProps = _.get(route, 'content.templateProps', {});
    const Content = _.get(route, 'content.render');
    const renderProps = _.get(route, 'content.renderProps', {});
    const ProtectedComponent = _.get(route, 'access.render');
    const protectedComponentProps = _.get(route, 'access.renderProps');
    return (
      <ProtectedRoute
        render={ProtectedComponent}
        renderProps={protectedComponentProps}
      >
        <Template {...templateProps}>
          <Content {...renderProps}></Content>
        </Template>
      </ProtectedRoute>
    );
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              element={getRouteContent(route)}
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

RouterManager.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      accessCallback: PropTypes.func,
      onAccessReject: PropTypes.func,
      content: PropTypes.shape({
        Template: PropTypes.func,
        templateProps: PropTypes.object,
        render: PropTypes.func.isRequired,
        renderProps: PropTypes.object,
      }).isRequired,
      access: PropTypes.shape({
        render: PropTypes.func,
        renderProps: PropTypes.object,
      }),
    })
  ),
};

export default RouterManager;
