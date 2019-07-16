import ReactTable from 'react-table';
import React, {Component} from 'react';

import {data} from './test';

const columns = [
  {
    Header: 'UUID',
    accessor: 'uuid',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'URL',
    accessor: 'url',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'SSH_Version',
    accessor: 'ssh_version',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Filename',
    accessor: 'filename',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Encr_Algo',
    accessor: 'encr_algo',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Latitude',
    accessor: 'latitude',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Longitude',
    accessor: 'longitude',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Data',
    accessor: 'data',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Timezone',
    accessor: 'timezone',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Hostname',
    accessor: 'hostname',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Country_Code3',
    accessor: 'country_code3',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Timestamp',
    accessor: 'timestamp',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Mac_Algo',
    accessor: 'mac_algo',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'ipv4',
    accessor: 'ipv4',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Continent_Code',
    accessor: 'continent_code',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Country_Code2',
    accessor: 'country_code2',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'City_Name',
    accessor: 'city_name',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Port',
    accessor: 'port',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Password',
    accessor: 'password',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'sha256',
    accessor: 'sha256',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Kex_Algo',
    accessor: 'kex_algo',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Region_Code',
    accessor: 'region_code',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Hash',
    accessor: 'hash',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Username',
    accessor: 'username',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Comp_Algo',
    accessor: 'comp_algo',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Event_Type',
    accessor: 'event_type',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Protocol',
    accessor: 'protocol',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Country_Name',
    accessor: 'country_name',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Pub_Key_Algo',
    accessor: 'pub_key_algo',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Region_Name',
    accessor: 'region_name',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
];

export default class ReactTableComponent extends Component {
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <ReactTable
          manual
          minRows={0}
          pageSize={1}
          data={data}
          columns={columns}
          pages={0}
          showPagination={true}
        />
      </div>
    );
  }
}