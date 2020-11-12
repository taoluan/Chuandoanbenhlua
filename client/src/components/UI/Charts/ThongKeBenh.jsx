import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

class ThongKeBenh extends React.Component {
  state = {
    dataHorizontal: {
      labels: ['Virus', 'Sâu', 'Vi khuẩn', 'Tuyến trùng', 'Nấm', 'Thiếu dinh dưỡng',],
      datasets: [
        {
          label: 'Thống kê',
          data: [22, 33, 55, 12, 86, 23],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
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
  };

  render() {
    return (
      <MDBContainer>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default ThongKeBenh;