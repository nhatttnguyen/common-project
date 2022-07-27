import React, { useEffect } from 'react';
import { Table } from 'antd';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { useInjectSaga, useInjectReducer } from 'utils/redux-injectors';
import useActions from 'hooks/useActions';

import saga from './saga';
import { actions, sliceKey, reducer } from './slice';

import { selectListKeys } from './selector';

export function Citavi() {
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'ProjectKey',
      dataIndex: 'projectKey',
      key: 'projectKey',
    },

    {
      title: 'StaticIDs',
      dataIndex: 'staticIDs',
      key: 'staticIDs',
    },
    {
      title: 'InternalStatus',
      dataIndex: 'internalStatus',
      key: 'internalStatus',
    },
    {
      title: 'CreatedOn',
      dataIndex: 'createdOn',
      key: 'createdOn',
    },
    {
      title: 'ModifiedOn',
      dataIndex: 'modifiedOn',
      key: 'modifiedOn',
    },
  ];
  let data = listKeys?.map(key => {
    if (key.id !== '35d96291-3b2f-4161-b98b-e7613dc9e9da') {
      return {
        key: key.id,
        id: key.id,
        name: key.name,
        reservedData: key.reservedData,
        staticIDs: key.staticIDs,
        internalStatus: key.internalStatus,
        projectKey: key.projectKey,
        createdOn: key.createdOn,
        modifiedOn: key.modifiedOn,
      };
    }
    return null;
  });
  data = data?.filter(n => n);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
        />
      </div>
    </>
  );
}
