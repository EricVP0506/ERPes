import React from 'react'; 
import { Card } from 'primereact/card';

export default function Cliente() {
    // Datos de la gráfica
    const data = [
        { name: "Clientes Activos", value: 100, color: "#22c55e" }, // Verde
        { name: "Campaña de Marketing", value: 10, color: "#3b82f6" }, // Azul
        { name: "Clientes Potenciales", value: 20, color: "#a855f7" }, // Morado
        { name: "Clientes Inactivos", value: 5, color: "#facc15" }, // Amarillo
        { name: "Clientes Perdidos", value: 5, color: "#ef4444" }, // Rojo
        { name: "Clientes Ganados", value: 10, color: "#16a34a" } // Verde oscuro
    ];

    // Calcular el total y los ángulos para el gráfico
    const total = data.reduce((acc, item) => acc + item.value, 0);
    let cumulativeAngle = 0;

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <Card title="Total de Clientes" className="shadow-lg p-4 w-96 bg-white rounded-lg border border-gray-200 text-center">
                <p className="text-gray-700 text-lg font-semibold">Clientes Totales</p>
                <p className="text-4xl font-extrabold text-black">150</p>
                
                {/* Gráfica de pastel */}
                <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                    {data.map((entry, index) => {
                        const angle = (entry.value / total) * 360;
                        const x1 = 100 + 100 * Math.cos((cumulativeAngle * Math.PI) / 180);
                        const y1 = 100 + 100 * Math.sin((cumulativeAngle * Math.PI) / 180);
                        cumulativeAngle += angle;
                        const x2 = 100 + 100 * Math.cos((cumulativeAngle * Math.PI) / 180);
                        const y2 = 100 + 100 * Math.sin((cumulativeAngle * Math.PI) / 180);

                        return (
                            <path
                                key={index}
                                d={`M100,100 L${x1},${y1} A100,100 0 ${angle > 180 ? 1 : 0} 1 ${x2},${y2} Z`}
                                fill={entry.color}
                            />
                        );
                    })}
                </svg>
            </Card>
        </div>
    );
}
