var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "project"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "create table Saffron_Quality_Certificate(GICertID integer,SaffronPackID integer,farmid integer,grade char(1),batchID integer,sqCertList integer,farmaddress varchar2(100),constraint pk_sqc primary key(GICertID, farmid), constraint fk_sqc foreign key(SaffronPackID) references Saffron (SaffronPackID));";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "create table Saffron(SaffronPackID integer primary key);";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "create table Farmer(phone integer,email varchar2(50),farmername varchar2(50),farmerList varchar2(500),create table Farmer( ipfsHashPhoto integer, longi integer, env_pkg_grade char(1), env_pkg_desc varchar2(200), SaffronPackID integer,lat integer,constraint pk_frmr primary key(phone, email), constraint fk_frmr foreign key(SaffronPackID) references Saffron(SaffronPackID) );";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "create table Sustainability_Certificate(farmid integer primary key,susCertList varchar2(200),farmeraddress varchar2(200),SaffronPackID integer,constraint fk_sc foreign key(SaffronPackID) references Saffron (SaffronPackID));";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "create table Batch(ipfsHashPhoto varchar2(500) primary key,batchlist varchar2(500),pkg_date date,batchimage integer,SaffronPackID integer,constraint fk_bt foreign key(SaffronPackID) references Saffron(SaffronPackID) );";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "create table Farm(env_fung varchar2(50),env_fung_desc varchar2(200),env_pH integer,env_pH_region integer, env_pH_nearby integer,env_pH_desc varchar2(200),water_irrigation varchar2(50), water_irrigation_desc varchar2(200),energy_pwrsrc varchar2(50), energy_pwrsrc_desc varchar2(200), gpi_ww varchar2(50),gpi_desc varchar2(200),env_co2 integer,env_co2_nearby integer, env_co2_desc varchar2(200), env_co2_region integer,env_insect varchar2(200),env_insect_desc varchar2(200),env_pest varchar2(50), env_pest_desc varchar2(200),env_n2 integer,env_n2_nearby integer  env_n2_region integer, env_n2_desc integer,SaffronPackID integer GICertID integer,    farmid integer,constraint fk_frm1 foreign key(SaffronPackID) references Saffron (SaffronPackID), constraint fk_frm2 foreign key (GICertID) references Saffrom_Quality_Certificate(GICertID),constraint fk_frm3 foreign key(farmid) references Saffron_Quality_Certificate(farmid));";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
 
  
});