import  React ,{useState,useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Tooltip,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker,HoverState } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import diseseaApi from '../../../api/diseseaApi'
const legendStyles = () => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    marginBottom: '0px',
    paddingBottom: '0px'
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);


const ThongKeKhuVuc = () =>{
    const [data, setData] = useState([])
    useEffect(() => {
        let unmounted = false;
        const fetchDiseseathongkekhuvuc = async ()=>{
            try {
              const respose = await diseseaApi.thongkeLoaiBenhKhuVuc()
              let data = [{ khuvuc : "Đồng bằng Duyên Hải Miền Trung",
                            tt: respose.dbdhmt.dataset[0] , 
                            sau: respose.dbdhmt.dataset[1],
                            virus : respose.dbdhmt.dataset[2],
                            vikhuan: respose.dbdhmt.dataset[3],
                            nam: respose.dbdhmt.dataset[4],
                            tcdd: respose.dbdhmt.dataset[5]
                        },{
                            khuvuc : "Đồng bằng Sông Cửu Long",
                            tt: respose.dbscl.dataset[0] , 
                            sau: respose.dbscl.dataset[1],
                            virus : respose.dbscl.dataset[2],
                            vikhuan: respose.dbscl.dataset[3],
                            nam: respose.dbscl.dataset[4],
                            tcdd: respose.dbscl.dataset[5]
                        },{
                            khuvuc : "Đồng bằng Sông Hồng",
                            tt: respose.dbsh.dataset[0] , 
                            sau: respose.dbsh.dataset[1],
                            virus : respose.dbsh.dataset[2],
                            vikhuan: respose.dbsh.dataset[3],
                            nam: respose.dbsh.dataset[4],
                            tcdd: respose.dbsh.dataset[5]
                        }
                    ]
                setData(data)
            } catch (error) {
              console.log(error)
            }
          }
        fetchDiseseathongkekhuvuc()
    return () => { unmounted = true };
    }, [])
    return (
      <Paper className="z-depth-0 mt-0 mb-0">
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Nắm"
            valueField="nam"
            argumentField="khuvuc"
            color="rgba(255, 99, 132, 1)"
          />
          <BarSeries
            name="Sâu"
            valueField="sau"
            argumentField="khuvuc"
            color="rgba(255, 159, 64, 1)"
          />
          <BarSeries
            name="Thiếu Chất Dinh Dưỡng"
            valueField="tcdd"
            argumentField="khuvuc"
            color="rgba(230, 215, 86, 1)"
          />
          <BarSeries
            name="Tuyến Trùng"
            valueField="tt"
            argumentField="khuvuc"
            color="rgba(75, 192, 192, 1)"
          />
          <BarSeries
            name="Vi khuẩn"
            valueField="vikhuan"
            argumentField="khuvuc"
            color="rgba(54, 162, 235, 1)"
            />
            <BarSeries
            name="Virus"
            valueField="virus"
            argumentField="khuvuc"
            color="rgba(153, 102, 255, 1)"
          />
          <Animation />
          <EventTracker />
          <Tooltip />
          <HoverState/>
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Stack />
        </Chart>
      </Paper>
    );
}
export default React.memo(ThongKeKhuVuc)