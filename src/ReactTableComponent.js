import ReactTable from 'react-table';
import React, {Component} from 'react';

import {data} from './test';

const columns = [
  {
    Header: 'UUID',
    accessor: 'uuid',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'URL',
    accessor: 'url',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'SSH_Version',
    accessor: 'ssh_version',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Filename',
    accessor: 'filename',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Encr_Algo',
    accessor: 'encr_algo',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Latitude',
    accessor: 'latitude',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Longitude',
    accessor: 'longitude',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Data',
    accessor: 'data',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Timezone',
    accessor: 'timezone',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Hostname',
    accessor: 'hostname',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Country_Code3',
    accessor: 'country_code3',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Timestamp',
    accessor: 'timestamp',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Mac_Algo',
    accessor: 'mac_algo',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'ipv4',
    accessor: 'ipv4',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Continent_Code',
    accessor: 'continent_code',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Country_Code2',
    accessor: 'country_code2',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'City_Name',
    accessor: 'city_name',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Port',
    accessor: 'port',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Password',
    accessor: 'password',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'sha256',
    accessor: 'sha256',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Kex_Algo',
    accessor: 'kex_algo',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Region_Code',
    accessor: 'region_code',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Hash',
    accessor: 'hash',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Username',
    accessor: 'username',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Comp_Algo',
    accessor: 'comp_algo',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Event_Type',
    accessor: 'event_type',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Protocol',
    accessor: 'protocol',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Country_Name',
    accessor: 'country_name',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Pub_Key_Algo',
    accessor: 'pub_key_algo',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Region_Name',
    accessor: 'region_name',
    Cell: row => (
      <div title={row.value}> {row.value != null ? 'x': ''} </div>
    ),
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
];

export default class ReactTableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div style={{ padding: '50px' }}>
        <ReactTable
          defaultPageSize={50}
          data={data}
          style={{
            height: (this.state.height*0.9)+"px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          columns={columns}
          showPagination={true}
          // SubComponent={row => {
          //   return (
          //     <div>
          //       max
          //     </div>
          //   )
          // }}
        />
      </div>
    );
  }
}