import React,{useState,useEffect} from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import diseseaApi from '../../../api/diseseaApi'
const data =()=>{
  let data = {
      labels: [],
      datasets: [
        {
          label: 'Thống kê',
          data: [],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(230, 215, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)'
          ],
          borderWidth: 2
        }
      ]
  }
  return data
}
const ThongKeBenh = (props)=> {
  const [dataHorizontal,setDataHorizontal] = useState(data);
  useEffect(() => {
    let unmounted = false;
    const fetchDiseseathongke_all = async ()=>{
      try {
        const respose = await diseseaApi.thongkeLoaiBenh()
        let dataset = dataHorizontal.datasets
        dataset[0].data = respose.dataset
        setDataHorizontal({
          ...dataHorizontal,
          labels:respose.label,
          datasets:dataset
        })
      } catch (error) {
        console.log(error)
      }
    }
    const fetchDiseseathongke_khuvuc = async (khuvuc)=>{
      try {
        const respose = await diseseaApi.thongkeLoaiBenhKhuVuc()
        let dataset = dataHorizontal.datasets
        if(khuvuc === "dbdhmt"){
          dataset[0].data = respose.dbdhmt.dataset
           setDataHorizontal({
            ...dataHorizontal,
            labels:respose.dbdhmt.label,
            datasets:dataset
          })
        }else if(khuvuc === "dbscl"){
          dataset[0].data = respose.dbscl.dataset
           setDataHorizontal({
            ...dataHorizontal,
            labels:respose.dbscl.label,
            datasets:dataset
          })
        }else{
          dataset[0].data = respose.dbsh.dataset
           setDataHorizontal({
            ...dataHorizontal,
            labels:respose.dbsh.label,
            datasets:dataset
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
    (props.option === "all")
    ? fetchDiseseathongke_all()
    : fetchDiseseathongke_khuvuc(props.option)
    return () => { unmounted = true };
  },[])
    return (
      <MDBContainer>
        <HorizontalBar
          data={dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
}

export default React.memo(ThongKeBenh);