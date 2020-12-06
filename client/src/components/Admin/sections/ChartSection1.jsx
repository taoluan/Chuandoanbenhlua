import React,{useEffect , useState}  from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { Bar, Pie } from 'react-chartjs-2';
import diseseaApi from '../../../api/diseseaApi'
import ThongKeKhuVuc from '../../UI/Charts/ThongKeKhuVuc'
const ChartSection1 = ()=> {
    const [dataBar, setdataBar] = useState({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
            {
                label: '#1',
                data: [12, 39, 3, 50, 2, 32, 84],
                backgroundColor: 'rgba(245, 74, 85, 0.5)',
                borderWidth: 1
            }, {
                label: '#2',
                data: [56, 24, 5, 16, 45, 24, 8],
                backgroundColor: 'rgba(90, 173, 246, 0.5)',
                borderWidth: 1
            }, {
                label: '#3',
                data: [12, 25, 54, 3, 15, 44, 3],
                backgroundColor: 'rgba(245, 192, 50, 0.5)',
                borderWidth: 1
            }
            ]
        }
    );
    const [dataPie, setdataPie] = useState({
        labels: [],
        datasets: [
        {
            data: [],
            backgroundColor: ['#FDB45C', '#42a5f5','#4fc3f7', '#F7464A', '#b388ff', '#1c2331 '],
            hoverBackgroundColor: ['#FFC870', '#64b5f6 ','#b3e5fc', '#FF5A5E', '#d1c4e9', '#424242']
        }
        ]
    });
    useEffect(() => {
        const fetchThongKeLoaiBenh = async()=>{
          const respose = await diseseaApi.thongkeLoaiBenh()
          let newArr = dataPie.datasets
          newArr[0].data = respose.dataset 
          setdataPie({
              ...dataPie,
              labels: respose.label,
              datasets : newArr
          })
        }
        fetchThongKeLoaiBenh()
      },[]);
    return (
        <MDBRow >
            <MDBCol md="8"className="mb-4">
                <MDBCard className="mb-4">
                <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Thông kê loại bênh theo khu vực</MDBCardHeader>
                    <MDBCardBody>
                        <ThongKeKhuVuc/>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="mb-4">
                <MDBCard className="mb-4">
                    <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Thông kê loại bệnh</MDBCardHeader>
                    <MDBCardBody>
                        <Pie data={dataPie} height={300} options={{responsive: true}} />
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}
const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    xAxes: [{
        barPercentage: 1,
        gridLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
        }
    }],
    yAxes: [{
        gridLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
        beginAtZero: true
        }
    }]
    }
}
export default ChartSection1;

