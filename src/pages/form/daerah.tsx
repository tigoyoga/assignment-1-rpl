import { UseQueryResult, useQuery } from "react-query";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import SelectInput from "@/components/forms/SelectInput";

type dataDaerah = {
  id: number;
  nama: string;
};

type dataProvinsi = {
  provinsi: dataDaerah[];
};

type dataKota = {
  kota_kabupaten: dataDaerah[];
};

type dataKecamatan = {
  kecamatan: dataDaerah[];
};

export default function Form() {
  const methods = useForm({
    mode: "onTouched",
  });

  const { watch } = methods;

  const prov = watch(["provinsi", "kabupaten"]);

  const { data: provinsiData } = useQuery<dataProvinsi>("provinsiData", () =>
    fetch("https://dev.farizdotid.com/api/daerahindonesia/provinsi").then(
      (res) => res.json()
    )
  );

  // fetch data kabupaten based on provinsi
  const { data: kabupatenData } = useQuery<dataKota>(
    ["kotaData", prov[0]],
    () =>
      fetch(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${prov[0]}`
      ).then((res) => res.json()),
    {
      enabled: prov[0] !== undefined,
    }
  );

  // fetch data kecamatan based on kabupaten
  const { data: kecamatanData } = useQuery<dataKecamatan>(
    ["kecamatanData", prov[1]],
    () =>
      fetch(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${prov[1]}`
      ).then((res) => res.json()),
    {
      enabled: prov[1] !== undefined,
    }
  );

  return (
    <div className='w-1/3 mx-auto mt-4'>
      <FormProvider {...methods}>
        <form action=''>
          <SelectInput
            id='provinsi'
            label='Provinsi'
            validation={{ required: "provinsi must be filled" }}
            placeholder='Choose provinsi'
          >
            {provinsiData?.provinsi.map((value, index) => (
              <option key={index} value={value.id}>
                {value.nama}
              </option>
            ))}
          </SelectInput>
          <SelectInput
            id='kabupaten'
            label='Kabupaten/Kota'
            validation={{ required: "Kabupaten/Kota must be filled" }}
            placeholder='Choose Kabupaten/Kota'
          >
            {kabupatenData?.kota_kabupaten.map((value, index) => (
              <option key={index} value={value.id}>
                {value.nama}
              </option>
            ))}
          </SelectInput>
          <SelectInput
            id='kecamatan'
            label='kecamatan'
            validation={{ required: "Kecamatan must be filled" }}
            placeholder='Choose Keamatan'
          >
            {kecamatanData?.kecamatan.map((value, index) => (
              <option key={index} value={value.id}>
                {value.nama}
              </option>
            ))}
          </SelectInput>
        </form>
      </FormProvider>
    </div>
  );
}
