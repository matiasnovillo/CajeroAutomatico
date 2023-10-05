using Microsoft.AspNetCore.Http;
using EmptyProject.Areas.CajeroAutomatico.Interfaces;
using EmptyProject.Areas.CajeroAutomatico.Models;
using System;

namespace EmptyProject.Areas.CajeroAutomatico.Services
{
    public class CajeroAutomaticoService : ICajeroAutomatico
    {
        private readonly IHttpContextAccessor _IHttpContextAccessor;

        public CajeroAutomaticoService(IHttpContextAccessor IHttpContextAccessor)
        {
            _IHttpContextAccessor = IHttpContextAccessor;
        }

        public string GetPIN(int PIN, string Tarjeta)
        {
            UsuarioTarjetaModel UsuarioTarjetaModel = new UsuarioTarjetaModel().GetPIN(PIN, Tarjeta);

            if (UsuarioTarjetaModel.Tarjeta == null)
            {
                UsuarioTarjetaModel UsuarioTarjetaModel2 = new UsuarioTarjetaModel().GetTarjeta(Tarjeta);

                if (UsuarioTarjetaModel2.Intentos > 0)
                {
                    UsuarioTarjetaModel2.Intentos -= 1;

                    UsuarioTarjetaModel2.RestarUnIntento(UsuarioTarjetaModel2.Intentos, Tarjeta);

                    return "PIN Invalido";
                }
                else
                {
                    return "Tarjeta bloqueada";
                }
            }
            else {
                return "OK";
            }
        }

        public string GetTarjeta(string Tarjeta)
        {
            UsuarioTarjetaModel UsuarioTarjetaModel = new UsuarioTarjetaModel().GetTarjeta(Tarjeta);

            if (UsuarioTarjetaModel.Tarjeta == null)
            {
                return "Tarjeta no encontrada";
            }
            else {

                if (UsuarioTarjetaModel.Intentos == 0)
                {
                    return "Tarjeta bloqueada";
                }
                else
                {
                    return "OK";
                }
            }
        }

        public int InsertarRegistroDeOperacion(int UsuarioTarjetaId, 
            DateTime FechaYHora, string CodigoDeOperacion, decimal CantidadDeDineroRetirado)
        {
            return new RegistroDeOperacionesModel().Insertar(UsuarioTarjetaId,
            FechaYHora, CodigoDeOperacion, CantidadDeDineroRetirado);
        }

        public string Retiro(int CantidadDeDineroARetirar, string Tarjeta)
        {
            UsuarioTarjetaModel UsuarioTarjetaModel = new UsuarioTarjetaModel().GetTarjeta(Tarjeta);

            if (UsuarioTarjetaModel.CantidadDeDinero < CantidadDeDineroARetirar)
            {
                return "Dinero Insuficiente";
            }
            else
            {
                UsuarioTarjetaModel.RetirarDinero(CantidadDeDineroARetirar, Tarjeta);

                int NewEnteredId = new RegistroDeOperacionesModel().Insertar(UsuarioTarjetaModel.UsuarioTarjetaId,
            DateTime.Now, "R", CantidadDeDineroARetirar);

                return "OK";
            }
        }

        public string CambiarPIN(int NuevoPIN, string Tarjeta)
        {
            int RowsAffected = new UsuarioTarjetaModel().CambiarPIN(NuevoPIN, Tarjeta);

            return "OK";
        }
    }
}