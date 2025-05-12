
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
         
//======= creating Book API ======================
export const bookApi =  createApi({
    reducerPath:'getBooks',
    baseQuery:fetchBaseQuery({baseUrl:'http://gutendex.com'}),
    endpoints:(builder)=>({
        getBooks:builder.mutation({
            query:()=>({
                url:'/books/?author_year_start=1800&author_year_end=1899',
                method:'GET'
            })
        }),
        getLangBook:builder.mutation({
            query:()=>({
                url:'/books?author_year_start=1900&languages=en,fr',
                method :'GET'
            })
        })
    })
});

export const {useGetBooksMutation} = bookApi;

//======= creating Magazine API ======================

export const magazineApi = createApi({
    reducerPath:'getMagazineList',
    baseQuery:fetchBaseQuery({baseUrl:'https://www.googleapis.com'}),
    endpoints:(builder)=>({
        getMagazine:builder.mutation({
            query:()=>({
                url:'/books/v1/volumes?q=time&printType=magazines&key=AIzaSyAlL8IayhadzDoPiQsSev9wK3PsNeh8ZDA',
                method:'GET'
            })
        })
    })
   
})

export const {useGetMagazineMutation} = magazineApi;


