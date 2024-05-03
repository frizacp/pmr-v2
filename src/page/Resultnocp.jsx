import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../component/Header';
import axios from 'axios';
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

function Resultnocp() {
  const [dataresult, setDataresult] = useState('');
  const [searchParams] = useSearchParams();
  const race = searchParams.get('race');
  const null_status = searchParams.get('null');
  // getdata
  const GetDataResult = async () => {
    try {
      const response = await axios.get(
        `https://pickmyrace.frizacahya.com/getdata_all?race=${race}&null=${null_status}`
      );
      setDataresult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    GetDataResult();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'bib', //access nested data with dot notation
        header: 'BIB',
        size: 20,
      },
      {
        accessorKey: 'lastName', //access nested data with dot notation
        header: 'NAME',
        size: 200,
      },
      {
        accessorKey: 'gender', //access nested data with dot notation
        header: 'GENDER',
        size: 30,
      },
      {
        accessorKey: 'contest', //access nested data with dot notation
        header: 'CONTEST',
        size: 30,
      },
      {
        accessorKey: 'overallplace', //access nested data with dot notation
        header: 'OVERPLACE',
        size: 20,
      },
      {
        accessorKey: 'divisionplace', //access nested data with dot notation
        header: 'DIVPLACE',
        size: 20,
      },
      {
        accessorKey: 'pace', //access nested data with dot notation
        header: 'PACE',
        size: 30,
      },
      {
        accessorKey: 'finishtime', //access nested data with dot notation
        header: 'FINISH',
        size: 20,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: dataresult.data && dataresult.data.length > 0 ? dataresult.data : [],
    enableStickyHeader: true,

    initialState: {
      pagination: { pageSize: 25 },
      sorting: [
        {
          id: 'overallplace', //sort by age by default on page load
          desc: false,
        },
      ],
    },
    // Menambahkan pengecekan apakah dataresult sudah ada sebelum digunakan
  });
  return (
    <div>
      <div>
        <Header data={dataresult} race={race} />
      </div>
      <div className=' py-2 px-8'>
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
}

export default Resultnocp;
