using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;

namespace EmptyProject.Areas.CajeroAutomatico.Models
{
    public class UsuarioTarjetaModel
    {
        private string _ConnectionString = ConnectionStrings.ConnectionStrings.Development();

        //Propiedades
        public int UsuarioTarjetaId { get; set; }
        public string Tarjeta { get; set; }
        public int Intentos { get; set; }
        public decimal CantidadDeDinero { get; set; }
        public string PIN { get; set; }
        public string FechaDeVencimiento { get; set; }

        public UsuarioTarjetaModel GetTarjeta(string Tarjeta)
        {
            try
            {
                UsuarioTarjetaModel UsuarioTarjetaModel = new UsuarioTarjetaModel();
                List<UsuarioTarjetaModel> lstUsuarioTarjetaModel = new List<UsuarioTarjetaModel>();
                DynamicParameters dp = new DynamicParameters();

                dp.Add("Tarjeta", Tarjeta, DbType.String, ParameterDirection.Input);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    lstUsuarioTarjetaModel = (List<UsuarioTarjetaModel>)sqlConnection.Query<UsuarioTarjetaModel>("[dbo].[UsuarioTarjeta.GetTarjeta]", dp, commandType: CommandType.StoredProcedure);
                }

                if (lstUsuarioTarjetaModel.Count > 1)
                { throw new Exception("El procedimiento almacenado [dbo].[UsuarioTarjeta.GetTarjeta] devolvió más de un registro"); }

                foreach (UsuarioTarjetaModel usuarioTarjeta in lstUsuarioTarjetaModel)
                {
                    UsuarioTarjetaModel.UsuarioTarjetaId = usuarioTarjeta.UsuarioTarjetaId;
                    UsuarioTarjetaModel.Tarjeta = usuarioTarjeta.Tarjeta;
                    UsuarioTarjetaModel.Intentos = usuarioTarjeta.Intentos;
                    UsuarioTarjetaModel.CantidadDeDinero = usuarioTarjeta.CantidadDeDinero;
                    UsuarioTarjetaModel.PIN = usuarioTarjeta.PIN;
                    UsuarioTarjetaModel.FechaDeVencimiento = usuarioTarjeta.FechaDeVencimiento;
                }

                return UsuarioTarjetaModel;
            }
            catch (Exception ex) { throw ex; }
        }

        public UsuarioTarjetaModel GetPIN(int PIN, string Tarjeta)
        {
            try
            {
                UsuarioTarjetaModel UsuarioTarjetaModel = new UsuarioTarjetaModel();
                List<UsuarioTarjetaModel> lstUsuarioTarjetaModel = new List<UsuarioTarjetaModel>();
                DynamicParameters dp = new DynamicParameters();

                dp.Add("PIN", PIN, DbType.Int32, ParameterDirection.Input);
                dp.Add("Tarjeta", Tarjeta, DbType.String, ParameterDirection.Input);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    lstUsuarioTarjetaModel = (List<UsuarioTarjetaModel>)sqlConnection.Query<UsuarioTarjetaModel>("[dbo].[UsuarioTarjeta.GetPIN]", dp, commandType: CommandType.StoredProcedure);
                }

                if (lstUsuarioTarjetaModel.Count > 1)
                { throw new Exception("El procedimiento almacenado [dbo].[UsuarioTarjeta.GetPIN] devolvió más de un registro"); }

                foreach (UsuarioTarjetaModel usuarioTarjeta in lstUsuarioTarjetaModel)
                {
                    UsuarioTarjetaModel.UsuarioTarjetaId = usuarioTarjeta.UsuarioTarjetaId;
                    UsuarioTarjetaModel.Tarjeta = usuarioTarjeta.Tarjeta;
                    UsuarioTarjetaModel.Intentos = usuarioTarjeta.Intentos;
                    UsuarioTarjetaModel.CantidadDeDinero = usuarioTarjeta.CantidadDeDinero;
                    UsuarioTarjetaModel.PIN = usuarioTarjeta.PIN;
                    UsuarioTarjetaModel.FechaDeVencimiento = usuarioTarjeta.FechaDeVencimiento;
                }

                return UsuarioTarjetaModel;
            }
            catch (Exception ex) { throw ex; }
        }

        public int RestarUnIntento(int Intento, string Tarjeta)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("Tarjeta", Tarjeta, DbType.String, ParameterDirection.Input);
                dp.Add("Intento", Intento, DbType.Int32, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[UsuarioTarjeta.RestarUnIntento]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    RowsAffected = dp.Get<int>("RowsAffected");
                }

                if (RowsAffected == 0) { throw new Exception("Ningun registro modificado"); }

                return RowsAffected;
            }
            catch (Exception ex) { throw ex; }
        }

        public int RetirarDinero(decimal CantidadDeDineroARetirar, string Tarjeta)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("Tarjeta", Tarjeta, DbType.String, ParameterDirection.Input);
                dp.Add("CantidadDeDineroARetirar", CantidadDeDineroARetirar, DbType.Decimal, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[UsuarioTarjeta.RetirarDinero]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    RowsAffected = dp.Get<int>("RowsAffected");
                }

                if (RowsAffected == 0) { throw new Exception("Ningun registro modificado"); }

                return RowsAffected;
            }
            catch (Exception ex) { throw ex; }
        }

        public int CambiarPIN(int NuevoPIN, string Tarjeta)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("Tarjeta", Tarjeta, DbType.String, ParameterDirection.Input);
                dp.Add("NuevoPIN", NuevoPIN, DbType.Int32, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[UsuarioTarjeta.CambiarPIN]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    RowsAffected = dp.Get<int>("RowsAffected");
                }

                if (RowsAffected == 0) { throw new Exception("Ningun registro modificado"); }

                return RowsAffected;
            }
            catch (Exception ex) { throw ex; }
        }

        public override string ToString()
        {
            return $"UsuarioTarjetaId: {UsuarioTarjetaId}, " +
                $"Tarjeta: {Tarjeta}, " +
                $"Intentos: {Intentos}, " +
                $"CantidadDeDinero: {CantidadDeDinero}, " +
                $"PIN: {PIN}";
        }
    }
}