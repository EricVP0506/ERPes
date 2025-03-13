import React from 'react'; 
import Cliente from './KPI/Clientes';
import Kpi2 from './KPI/Kpi2/Kpi2'; // Verifica que el archivo exista con este nombre exacto
import Kpi3 from './KPI/Kpi3/Kpi3';
import Kpi4 from './KPI/Kpi4/Kpi4';

export default function Dashboard() {
    return (
        <>
            <h3>Dashboard</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <Cliente />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <Kpi2 />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <Kpi3 />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <Kpi4 />
                    </div>
                </div>
            </div>
        </>
    );
}