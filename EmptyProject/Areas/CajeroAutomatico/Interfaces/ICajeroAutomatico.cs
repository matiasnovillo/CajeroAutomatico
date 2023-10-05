using System;

namespace EmptyProject.Areas.CajeroAutomatico.Interfaces
{
    public partial interface ICajeroAutomatico
    {
        string GetTarjeta(string Tarjeta);

        string GetPIN(int PIN, string Tarjeta);

        int InsertarRegistroDeOperacion(int UsuarioTarjetaId, DateTime FechaYHora, 
            string CodigoDeOperacion, decimal CantidadDeDineroRetirado);

        string Retiro(int CantidadDeDineroARetirar, string Tarjeta);

        string CambiarPIN(int NuevoPIN, string Tarjeta);
    }
}