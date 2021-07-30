using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    //Dbcontext is an abstraction away from the database
    public class DataContext : DbContext
    {
        //Passing in options to the DataContext object that has dbcontext
        //features
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Activity> Activities { get; set; }
    }
}