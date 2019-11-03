import React, { useMemo, useState, useCallback } from 'react';
import MainRouter from 'routes/main.router';
import { ConfigProvider, Layout } from 'antd';
import { hot } from 'react-hot-loader/root';
import STMenu from 'core/components/menu/menu.component';
import STTrigger from 'core/components/trigger/trigger.component';
import STHeader from 'core/components/header/header.container';
import { connect } from 'react-redux';
import { selectLayoutState } from 'core/core.reducer';
import { AppState } from 'redux/app-state';

import es_ES from 'antd/lib/locale/es_ES';
import en_US from 'antd/lib/locale/en_US';
import pt_BR from 'antd/lib/locale/pt_BR';

const { Header, Content, Sider } = Layout;
const browserLocale = window.navigator.language.toLocaleLowerCase();
const locale = browserLocale.search('pt') > -1 ? pt_BR : browserLocale.search('es') > -1 ? es_ES : en_US;

const STSider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const handleClick = useCallback(() => setCollapsed(!collapsed), [collapsed]);

  return useMemo(
    () => (
      <Sider
        className="st-sider"
        trigger={null}
        collapsible={true}
        collapsed={collapsed}
        collapsedWidth={64}
        width={250}
      >
        <STMenu />
        <STTrigger onClick={handleClick} collapsed={collapsed} />
      </Sider>
    ),
    [handleClick, collapsed]
  );
};

export interface IAppProps {
  readonly history: any;
  readonly showSider: any;
  readonly showHeader: any;
}

export const App: React.FC<IAppProps> = props => {
  return (
    <ConfigProvider locale={locale}>
      <Layout className="st-layout">
        {props.showSider && <STSider />}
        <Layout>
          {props.showHeader && (
            <Header className="st-header">
              <STHeader history={props.history} />
            </Header>
          )}
          <Content className="st-content">
            <MainRouter />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

const mapStateToProps = (state: AppState) => selectLayoutState(state.uiState.global);

export default connect(mapStateToProps)(hot(App));
