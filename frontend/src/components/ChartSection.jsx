import React from 'react';
import ReactApexChart from 'react-apexcharts';

function ChartSection() {
    const chartOptions = {
        series: [70],
        chart: {
          height: 300,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%',
            },
          },
        },
        labels: ['Percentage'],
      };

  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center">
        <p className="text-base font-bold text-blue-700 mb-4">OUR HISTORY</p>
        <h2 className="text-4xl font-bold text-blue-950">We’re at employees benefit in</h2>
        <h2 className="text-4xl font-bold text-blue-950 mb-6">7000+ companiess</h2>
      </div>

      <div className="flex justify-center mt-8">
        {/* Hidden Circles */}
        <div className="md:flex md:flex-row space-x-6">
          {/* Circle 2 */}
          <div className="text-center">
            <div className="bg-transparent rounded-full flex items-center justify-center">
              {/* ApexChart */}
              <ReactApexChart options={chartOptions} series={chartOptions.series} type="radialBar" height={300} />
            </div>
            <p className="text-blue-950 text-lg">Happy Patient</p>
          </div>

          {/* Circle 3 */}
          <div className="text-center">
            <div className="bg-transparent rounded-full flex items-center justify-center">
              {/* ApexChart */}
              <ReactApexChart options={chartOptions} series={chartOptions.series} type="radialBar" height={300} />
            </div>
            <p className="text-blue-950 text-lg">Variety services</p>
          </div>

          <div className="text-center">
          <div className="bg-transparent rounded-full flex items-center justify-center">
            {/* ApexChart */}
            <ReactApexChart options={chartOptions} series={chartOptions.series} type="radialBar" height={300} />
          </div>
          <p className="text-blue-950 text-lg">Years of Experience</p>
        </div>

          {/* Circle 4 */}
          <div className="text-center">
            <div className="bg-transparent rounded-full flex items-center justify-center">
              {/* ApexChart */}
              <ReactApexChart options={chartOptions} series={chartOptions.series} type="radialBar" height={300} />
            </div>
            <p className="text-blue-950 text-lg">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChartSection;
