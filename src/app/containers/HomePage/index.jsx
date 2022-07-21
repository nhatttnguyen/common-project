import React, { useEffect } from 'react';
import { Table } from 'antd';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useInjectSaga, useInjectReducer } from 'utils/redux-injectors';
import useActions from 'hooks/useActions';

import saga from './saga';
import { actions, sliceKey, reducer } from './slice';

import Icon from 'app/components/Icon';
import { selectListKeys } from './selector';

export function HomePage() {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const listKeys = useSelector(selectListKeys);

  const { fetchListKeysStart } = useActions(
    {
      fetchListKeysStart: actions.fetchListKeysStart,
    },
    [actions],
  );

  useEffect(() => {
    fetchListKeysStart();
  }, [fetchListKeysStart]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'BibTeXKey',
      dataIndex: 'bibTeXKey',
      key: 'bibTeXKey',
    },
    {
      title: 'CitationKey',
      dataIndex: 'citationKey',
      key: 'citationKey',
    },
  ];
  const data = listKeys?.map(key => {
    return {
      key: key.id,
      id: key.id,
      title: key.title,
      bibTeXKey: key.bibTeXKey,
      citationKey: key.citationKey,
    };
  });

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <h1>
        <Icon type="icon-home"></Icon>My HomePage
      </h1>
      <div>
        <Link to="/subpage">
          <button>SubPage</button>
        </Link>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}
