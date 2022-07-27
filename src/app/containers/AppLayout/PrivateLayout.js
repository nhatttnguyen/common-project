import React, { memo, useState } from 'react';
import { privateRoutes } from './routes';
import PrivateRoute from './PrivateRoute';
import CommonLayout from './CommonLayout';
import { Redirect, Switch } from 'react-router-dom';
import { StyledLayout, StyledContent } from './styles';
import FixedSider from './FixedSider';
import CollapsibleSider from './CollapsibleSider';
import { Layout } from 'antd';
const PrivateLayout = memo(function PrivateLayout() {
  const { Content } = Layout;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <StyledLayout>
      <Layout>
        <FixedSider isCollapsed={isCollapsed} onCollapse={onCollapse} />
        <CollapsibleSider isCollapsed={isCollapsed} onCollapse={onCollapse} />
        <Layout>
          <Content>
            <StyledContent>
              <Switch>
                {privateRoutes.map(item => (
                  <PrivateRoute
                    key={item.key}
                    exact
                    path={item.path}
                    component={item.component}
                    layout={CommonLayout}
                    permissions={item.permissions}
                  />
                ))}
                <Redirect to="/not-found" />
              </Switch>
            </StyledContent>
          </Content>
        </Layout>
      </Layout>
    </StyledLayout>
  );
});

export default PrivateLayout;
