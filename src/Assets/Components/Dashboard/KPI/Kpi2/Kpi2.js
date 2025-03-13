import React from 'react'; 
import { Card } from 'primereact/card';

export default function Kpi2() {
    return (
        <div className="card">
            <Card title="Total de Clientes">
                <p ClassName ="m-0">
                    Clientes Activos = 100
                    Campaña de Marketing = 10
                    Clientes Potenciales = 20
                    Clientes Inactivos = 5
                    Clientes Perdidos = 5
                    Clientes Ganados = 10
                    Clientes Totales = 150
                </p>
            </Card>
      </div>
    )
}