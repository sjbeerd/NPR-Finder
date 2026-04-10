const STATIONS = [
    // --- PENNSYLVANIA (WHYY, WITF, WXPN, WVIA) ---
    {"call":"WHYY","freq":"90.9","lat":39.95,"lon":-75.17,"city":"Philadelphia","type":"Primary"},
    {"call":"WXPN","freq":"88.5","lat":40.01,"lon":-75.31,"city":"Philadelphia","type":"Boutique"}, // Triple-A Music
    {"call":"WRTI","freq":"90.1","lat":40.01,"lon":-75.21,"city":"Philadelphia","type":"Boutique"}, // Jazz/Classical
    {"call":"WITF","freq":"89.5","lat":40.27,"lon":-76.88,"city":"Harrisburg","type":"Primary"},
    {"call":"WVIA","freq":"89.9","lat":41.34,"lon":-75.76,"city":"Scranton","type":"Primary"},
    {"call":"WPSU","freq":"91.5","lat":40.79,"lon":-77.86,"city":"State College","type":"Primary"},
    {"call":"WQLN","freq":"91.3","lat":42.13,"lon":-80.09,"city":"Erie","type":"Primary"},
    {"call":"WQED","freq":"89.3","lat":40.44,"lon":-79.95,"city":"Pittsburgh","type":"Primary"},
    {"call":"WYEP","freq":"91.3","lat":40.43,"lon":-79.92,"city":"Pittsburgh","type":"Boutique"}, // Alternative

    // --- NEW JERSEY (NJPR Network & WHYY Relays) ---
    {"call":"WNJT","freq":"88.1","lat":40.22,"lon":-74.76,"city":"Trenton","type":"Primary"},
    {"call":"WNJM","freq":"89.9","lat":39.70,"lon":-74.22,"city":"Manahawkin","type":"Relay"},
    {"call":"WNJP","freq":"88.5","lat":40.49,"lon":-74.45,"city":"New Brunswick","type":"Relay"},
    {"call":"WNJB","freq":"89.3","lat":39.43,"lon":-75.23,"city":"Bridgeton","type":"Relay"},
    {"call":"WNJY","freq":"89.3","lat":41.12,"lon":-74.57,"city":"Netcong","type":"Relay"},
    {"call":"WNJO","freq":"90.3","lat":39.54,"lon":-74.34,"city":"Toms River","type":"Relay"},

    // --- NEW YORK (WNYC, WAMC, WXXI) ---
    {"call":"WNYC","freq":"93.9","lat":40.75,"lon":-73.98,"city":"New York City","type":"Primary"},
    {"call":"WFUV","freq":"90.7","lat":40.86,"lon":-73.88,"city":"Bronx","type":"Boutique"}, // AAA Music
    {"call":"WAMC","freq":"90.3","lat":42.65,"lon":-73.76,"city":"Albany","type":"Primary"},
    {"call":"WOSR","freq":"91.7","lat":41.45,"lon":-74.42,"city":"Middletown","type":"Relay"},
    {"call":"WAMK","freq":"90.9","lat":41.93,"lon":-73.99,"city":"Kingston","type":"Relay"},
    {"call":"WCEL","freq":"91.9","lat":44.69,"lon":-73.46,"city":"Plattsburgh","type":"Relay"},
    {"call":"WXXI","freq":"91.5","lat":43.16,"lon":-77.61,"city":"Rochester","type":"Primary"},
    {"call":"WBFO","freq":"88.7","lat":42.89,"lon":-78.88,"city":"Buffalo","type":"Primary"},
    {"call":"WRVO","freq":"89.9","lat":43.45,"lon":-76.51,"city":"Oswego","type":"Primary"},

    // --- DELAWARE & MARYLAND (WDDE, WYPR) ---
    {"call":"WDDE","freq":"91.1","lat":39.16,"lon":-75.52,"city":"Dover, DE","type":"Primary"},
    {"call":"WYPR","freq":"88.1","lat":39.30,"lon":-76.61,"city":"Baltimore, MD","type":"Primary"},
    {"call":"WSDL","freq":"90.7","lat":38.37,"lon":-75.59,"city":"Ocean City, MD","type":"Relay"},
    {"call":"WSCL","freq":"89.5","lat":38.37,"lon":-75.59,"city":"Salisbury, MD","type":"Boutique"}, // Fine Arts

    // --- DC & VIRGINIA (WAMU, Radio IQ, WHRV) ---
    {"call":"WAMU","freq":"88.5","lat":38.94,"lon":-77.08,"city":"Washington, DC","type":"Primary"},
    {"call":"WETA","freq":"90.9","lat":38.89,"lon":-77.06,"city":"Washington, DC","type":"Boutique"}, // Classical
    {"call":"WVTF","freq":"89.1","lat":37.27,"lon":-79.94,"city":"Roanoke, VA","type":"Primary"},
    {"call":"WVTU","freq":"89.3","lat":38.03,"lon":-78.48,"city":"Charlottesville, VA","type":"Relay"},
    {"call":"WRIQ","freq":"89.7","lat":37.33,"lon":-77.10,"city":"Richmond, VA","type":"Relay"},
    {"call":"WHRV","freq":"89.5","lat":36.85,"lon":-76.29,"city":"Norfolk, VA","type":"Primary"},

    // --- WEST VIRGINIA (WVPB Network) ---
    {"call":"WVPN","freq":"88.5","lat":38.35,"lon":-81.63,"city":"Charleston","type":"Primary"},
    {"call":"WVPM","freq":"90.9","lat":39.63,"lon":-79.95,"city":"Morgantown","type":"Relay"},
    {"call":"WVEP","freq":"88.9","lat":39.46,"lon":-77.96,"city":"Martinsburg","type":"Relay"},
    {"call":"WVPW","freq":"88.9","lat":38.99,"lon":-80.22,"city":"Buckhannon","type":"Relay"},

    // --- NEW ENGLAND (Maine, NH, VT, MA, RI, CT) ---
    {"call":"WBUR","freq":"90.9","lat":42.35,"lon":-71.11,"city":"Boston, MA","type":"Primary"},
    {"call":"WGBH","freq":"89.7","lat":42.35,"lon":-71.12,"city":"Boston, MA","type":"Primary"},
    {"call":"WFCR","freq":"88.5","lat":42.38,"lon":-72.52,"city":"Amherst, MA","type":"Primary"},
    {"call":"WNPN","freq":"89.3","lat":41.83,"lon":-71.41,"city":"Providence, RI","type":"Primary"},
    {"call":"WNPR","freq":"90.5","lat":41.76,"lon":-72.68,"city":"Hartford, CT","type":"Primary"},
    {"call":"WEVO","freq":"89.1","lat":43.20,"lon":-71.53,"city":"Concord, NH","type":"Primary"},
    {"call":"WVPS","freq":"107.9","lat":44.47,"lon":-73.21,"city":"Burlington, VT","type":"Primary"},
    {"call":"WMEA","freq":"90.1","lat":43.66,"lon":-70.25,"city":"Portland, ME","type":"Primary"},
    {"call":"WMEP","freq":"90.5","lat":44.80,"lon":-68.77,"city":"Bangor, ME","type":"Relay"}
];
