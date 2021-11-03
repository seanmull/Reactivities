using Domain;
using MediatR;
using System.Collections.Generic;

namespace Application.Activities

{
    public class List
    {
        public class Query: IRequest<List<Activity>>{}
    }
}