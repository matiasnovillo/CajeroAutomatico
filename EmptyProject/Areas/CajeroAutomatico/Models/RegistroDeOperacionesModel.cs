using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Data;

namespace EmptyProject.Areas.CajeroAutomatico.Models
{
    public class RegistroDeOperacionesModel
    {
        private string _ConnectionString = ConnectionStrings.ConnectionStrings.Development();

        //Propiedades
        public int RegistroDeOperacionesId { get; set; }
        public int UsuarioTarjetaId { get; set; }
        public DateTime FechaYHora { get; set; }
        public string CodigoDeOperacion { get; set; }
        public decimal CantidadDeDineroRetirado { get; set; }

        public int Insertar(int UsuarioTarjetaId, DateTime FechaYHora, 
            string CodigoDeOperacion, decimal CantidadDeDineroRetirado)
        {
            try
            {
                int NewEnteredId = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("UsuarioTarjetaId", UsuarioTarjetaId, DbType.Int32, ParameterDirection.Input);
                dp.Add("FechaYHora", FechaYHora, DbType.DateTime, ParameterDirection.Input);
                dp.Add("CodigoDeOperacion", CodigoDeOperacion, DbType.String, ParameterDirection.Input);
                dp.Add("CantidadDeDineroRetirado", CantidadDeDineroRetirado, DbType.Decimal, ParameterDirection.Input);
                dp.Add("NewEnteredId", NewEnteredId, DbType.Int32, ParameterDirection.Output);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[RegistroDeOperaciones.Insertar]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    NewEnteredId = dp.Get<int>("NewEnteredId");
                }

                if (NewEnteredId == 0) { throw new Exception("Ningun registro ingresado"); }

                return NewEnteredId;
            }
            catch (Exception ex) { throw ex; }
        }


        public override string ToString()
        {
            return $"RegistroDeOperacionesId: {RegistroDeOperacionesId}, " +
                $"UsuarioTarjetaId: {UsuarioTarjetaId}, " +
                $"FechaYHora: {FechaYHora}, " +
                $"CodigoDeOperacion: {CodigoDeOperacion}, " +
                $"CantidadDeDineroRetirado: {CantidadDeDineroRetirado}";
        }
    }
}