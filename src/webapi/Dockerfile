FROM mcr.microsoft.com/dotnet/core-nightly/aspnet:2.2

ENV ASPNETCORE_URLS  "http://+:9900"

EXPOSE 9900

WORKDIR /app
COPY ./publish .

CMD ["dotnet", "WebAPI.dll"]
