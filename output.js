switch (postCodeArea) {
  case UkPostCodeAreas.Aberdeen:
    return (
      isBetween(postCodeDistrictNumber, 10, 16) ||
      isBetween(postCodeDistrictNumber, 21, 25) ||
      postCodeDistrictNumber === 30 ||
      postCodeDistrictNumber === 32 ||
      isBetween(postCodeDistrictNumber, 36, 39) ||
      isBetween(postCodeDistrictNumber, 41, 44) ||
      postCodeDistrictNumber === 51 ||
      isBetween(postCodeDistrictNumber, 55, 56) ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.StAlbans:
    return isBetween(postCodeDistrictNumber, 1, 10);
  case UkPostCodeAreas.Birmingham:
    return (
      isBetween(postCodeDistrictNumber, 1, 21) ||
      isBetween(postCodeDistrictNumber, 23, 50) ||
      isBetween(postCodeDistrictNumber, 60, 80) ||
      isBetween(postCodeDistrictNumber, 90, 99)
    );
  case UkPostCodeAreas.Bath:
    return isBetween(postCodeDistrictNumber, 1, 21);
  case UkPostCodeAreas.Blackburn:
    return (
      isBetween(postCodeDistrictNumber, 1, 12) ||
      postCodeDistrictNumber === 18 ||
      postCodeDistrictNumber === 94
    );
  case UkPostCodeAreas.Bradford:
    return (
      isBetween(postCodeDistrictNumber, 1, 24) ||
      isBetween(postCodeDistrictNumber, 97, 99)
    );
  case UkPostCodeAreas.Bournemouth:
    return (
      isBetween(postCodeDistrictNumber, 1, 25) || postCodeDistrictNumber === 31
    );
  case UkPostCodeAreas.Bolton:
    return (
      isBetween(postCodeDistrictNumber, 0, 9) ||
      postCodeDistrictNumber === 11 ||
      postCodeDistrictNumber === 78
    );
  case UkPostCodeAreas.Brighton:
    return (
      isBetween(postCodeDistrictNumber, 1, 27) ||
      isBetween(postCodeDistrictNumber, 41, 45) ||
      isBetween(postCodeDistrictNumber, 50, 52) ||
      postCodeDistrictNumber === 88 ||
      postCodeDistrictNumber === 91 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Bromley:
    return isBetween(postCodeDistrictNumber, 1, 9);
  case UkPostCodeAreas.Bristol:
    return (
      isBetween(postCodeDistrictNumber, 1, 16) ||
      isBetween(postCodeDistrictNumber, 20, 32) ||
      isBetween(postCodeDistrictNumber, 34, 41) ||
      isBetween(postCodeDistrictNumber, 48, 49) ||
      postCodeDistrictNumber === 80 ||
      isBetween(postCodeDistrictNumber, 98, 99)
    );
  case UkPostCodeAreas.Carlisle:
    return (
      isBetween(postCodeDistrictNumber, 1, 28) ||
      postCodeDistrictNumber === 95 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Cambridge:
    return (
      isBetween(postCodeDistrictNumber, 1, 11) ||
      isBetween(postCodeDistrictNumber, 21, 25)
    );
  case UkPostCodeAreas.Cardiff:
    return (
      postCodeDistrictNumber === 3 ||
      postCodeDistrictNumber === 5 ||
      postCodeDistrictNumber === 11 ||
      isBetween(postCodeDistrictNumber, 14, 15) ||
      isBetween(postCodeDistrictNumber, 23, 24) ||
      isBetween(postCodeDistrictNumber, 30, 48) ||
      isBetween(postCodeDistrictNumber, 61, 64) ||
      isBetween(postCodeDistrictNumber, 71, 72) ||
      isBetween(postCodeDistrictNumber, 81, 83) ||
      postCodeDistrictNumber === 91 ||
      postCodeDistrictNumber === 95 ||
      postCodeDistrictNumber === 99
    );
  case "CG":
    return postCodeDistrictNumber === 10;
  case UkPostCodeAreas.Chester:
    return (
      isBetween(postCodeDistrictNumber, 1, 8) ||
      isBetween(postCodeDistrictNumber, 25, 34) ||
      isBetween(postCodeDistrictNumber, 43, 49) ||
      isBetween(postCodeDistrictNumber, 60, 66) ||
      postCodeDistrictNumber === 70 ||
      postCodeDistrictNumber === 88 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Chelmsford:
    return (
      isBetween(postCodeDistrictNumber, 0, 9) ||
      isBetween(postCodeDistrictNumber, 11, 24) ||
      postCodeDistrictNumber === 77 ||
      postCodeDistrictNumber === 92 ||
      isBetween(postCodeDistrictNumber, 98, 99)
    );
  case UkPostCodeAreas.Colchester:
    return isBetween(postCodeDistrictNumber, 1, 16);
  case UkPostCodeAreas.Croydon:
    return (
      postCodeDistrictNumber === 0 ||
      isBetween(postCodeDistrictNumber, 2, 9) ||
      postCodeDistrictNumber === 44 ||
      postCodeDistrictNumber === 90
    );
  case UkPostCodeAreas.Canterbury:
    return (
      isBetween(postCodeDistrictNumber, 1, 21) || postCodeDistrictNumber === 50
    );
  case UkPostCodeAreas.Coventry:
    return (
      isBetween(postCodeDistrictNumber, 1, 13) ||
      isBetween(postCodeDistrictNumber, 21, 23) ||
      isBetween(postCodeDistrictNumber, 31, 37) ||
      postCodeDistrictNumber === 47
    );
  case UkPostCodeAreas.Crewe:
    return (
      isBetween(postCodeDistrictNumber, 1, 12) || postCodeDistrictNumber === 98
    );
  case UkPostCodeAreas.Dartford:
    return isBetween(postCodeDistrictNumber, 1, 18);
  case "DC":
    return postCodeDistrictNumber === 51;
  case UkPostCodeAreas.Dundee:
    return isBetween(postCodeDistrictNumber, 1, 11);
  case UkPostCodeAreas.Derby:
    return (
      postCodeDistrictNumber === 1 ||
      isBetween(postCodeDistrictNumber, 3, 7) ||
      isBetween(postCodeDistrictNumber, 11, 15) ||
      isBetween(postCodeDistrictNumber, 21, 24) ||
      postCodeDistrictNumber === 45 ||
      isBetween(postCodeDistrictNumber, 55, 56) ||
      isBetween(postCodeDistrictNumber, 72, 75) ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Dumfries:
    return isBetween(postCodeDistrictNumber, 1, 16);
  case UkPostCodeAreas.Durham:
    return (
      isBetween(postCodeDistrictNumber, 1, 9) ||
      isBetween(postCodeDistrictNumber, 97, 99)
    );
  case UkPostCodeAreas.Darlington:
    return isBetween(postCodeDistrictNumber, 1, 17);
  case UkPostCodeAreas.Doncaster:
    return (
      isBetween(postCodeDistrictNumber, 1, 22) ||
      isBetween(postCodeDistrictNumber, 31, 41) ||
      postCodeDistrictNumber === 55
    );
  case UkPostCodeAreas.Dorchester:
    return isBetween(postCodeDistrictNumber, 1, 11);
  case UkPostCodeAreas.Dudley:
    return isBetween(postCodeDistrictNumber, 1, 14);
  case UkPostCodeAreas.EastLondon:
    return (
      isBetween(postCodeDistrictNumber, 1, 20) ||
      postCodeDistrictNumber === 77 ||
      postCodeDistrictNumber === 98
    );
  case UkPostCodeAreas.EastCentralLondon:
    return (
      postCodeDistrictNumber === 50 ||
      isBetween(postCodeDistrictNumber, 2, 4) ||
      isBetween(postCodeDistrictNumber, 1, 4) ||
      isBetween(postCodeDistrictNumber, 1, 2) ||
      postCodeDistrictNumber === 4
    );
  case UkPostCodeAreas.Edinburgh:
    return (
      isBetween(postCodeDistrictNumber, 1, 55) ||
      postCodeDistrictNumber === 91 ||
      postCodeDistrictNumber === 95 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Enfield:
    return isBetween(postCodeDistrictNumber, 1, 11);
  case UkPostCodeAreas.EastLondon:
    return postCodeDistrictNumber === 1;
  case UkPostCodeAreas.Exeter:
    return (
      isBetween(postCodeDistrictNumber, 1, 24) ||
      isBetween(postCodeDistrictNumber, 31, 39)
    );
  case UkPostCodeAreas.Falkirk:
    return isBetween(postCodeDistrictNumber, 1, 16);
  case UkPostCodeAreas.Blackpool:
    return isBetween(postCodeDistrictNumber, 0, 8);
  case UkPostCodeAreas.Glasgow:
    return (
      isBetween(postCodeDistrictNumber, 1, 15) ||
      isBetween(postCodeDistrictNumber, 20, 23) ||
      isBetween(postCodeDistrictNumber, 31, 34) ||
      isBetween(postCodeDistrictNumber, 40, 46) ||
      isBetween(postCodeDistrictNumber, 51, 53) ||
      postCodeDistrictNumber === 58 ||
      isBetween(postCodeDistrictNumber, 60, 80) ||
      isBetween(postCodeDistrictNumber, 82, 84) ||
      postCodeDistrictNumber === 90
    );
  case UkPostCodeAreas.Gloucester:
    return (
      isBetween(postCodeDistrictNumber, 1, 20) ||
      isBetween(postCodeDistrictNumber, 50, 56)
    );
  case UkPostCodeAreas.Guildford:
    return (
      isBetween(postCodeDistrictNumber, 1, 35) ||
      isBetween(postCodeDistrictNumber, 46, 47) ||
      isBetween(postCodeDistrictNumber, 51, 52) ||
      postCodeDistrictNumber === 95
    );
  case UkPostCodeAreas.Harrow:
    return isBetween(postCodeDistrictNumber, 0, 9);
  case UkPostCodeAreas.Huddersfield:
    return isBetween(postCodeDistrictNumber, 1, 9);
  case UkPostCodeAreas.Harrogate:
    return isBetween(postCodeDistrictNumber, 1, 5);
  case UkPostCodeAreas.HemelHempstead:
    return (
      isBetween(postCodeDistrictNumber, 1, 23) || postCodeDistrictNumber === 27
    );
  case UkPostCodeAreas.Halifax:
    return isBetween(postCodeDistrictNumber, 1, 7);
  case UkPostCodeAreas.Ilford:
    return isBetween(postCodeDistrictNumber, 1, 11);
  case UkPostCodeAreas.Ipswich:
    return (
      isBetween(postCodeDistrictNumber, 1, 33) || postCodeDistrictNumber === 98
    );
  case UkPostCodeAreas.Inverness:
    return (
      isBetween(postCodeDistrictNumber, 57, 62) ||
      isBetween(postCodeDistrictNumber, 64, 99)
    );
  case UkPostCodeAreas.Kilmarnock:
    return (
      isBetween(postCodeDistrictNumber, 1, 26) ||
      isBetween(postCodeDistrictNumber, 29, 30)
    );
  case UkPostCodeAreas.KingstonUponThames:
    return isBetween(postCodeDistrictNumber, 1, 24);
  case UkPostCodeAreas.Kirkcaldy:
    return (
      isBetween(postCodeDistrictNumber, 1, 16) || postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Liverpool:
    return (
      isBetween(postCodeDistrictNumber, 1, 40) ||
      isBetween(postCodeDistrictNumber, 67, 75) ||
      postCodeDistrictNumber === 80
    );
  case UkPostCodeAreas.Lancaster:
    return isBetween(postCodeDistrictNumber, 1, 23);
  case UkPostCodeAreas.LlandrindodWells:
    return isBetween(postCodeDistrictNumber, 1, 8);
  case UkPostCodeAreas.Leicester:
    return (
      isBetween(postCodeDistrictNumber, 1, 19) ||
      postCodeDistrictNumber === 21 ||
      postCodeDistrictNumber === 41 ||
      postCodeDistrictNumber === 55 ||
      postCodeDistrictNumber === 65 ||
      postCodeDistrictNumber === 67 ||
      postCodeDistrictNumber === 87 ||
      isBetween(postCodeDistrictNumber, 94, 95)
    );
  case UkPostCodeAreas.Llandudno:
    return (
      isBetween(postCodeDistrictNumber, 11, 49) ||
      isBetween(postCodeDistrictNumber, 51, 78)
    );
  case UkPostCodeAreas.Lincoln:
    return isBetween(postCodeDistrictNumber, 1, 13);
  case UkPostCodeAreas.Leeds:
    return (
      isBetween(postCodeDistrictNumber, 1, 29) ||
      postCodeDistrictNumber === 88 ||
      isBetween(postCodeDistrictNumber, 98, 99)
    );
  case UkPostCodeAreas.Luton:
    return isBetween(postCodeDistrictNumber, 1, 7);
  case UkPostCodeAreas.Manchester:
    return (
      isBetween(postCodeDistrictNumber, 1, 9) ||
      isBetween(postCodeDistrictNumber, 11, 19) ||
      isBetween(postCodeDistrictNumber, 21, 29) ||
      isBetween(postCodeDistrictNumber, 31, 35) ||
      isBetween(postCodeDistrictNumber, 40, 41) ||
      isBetween(postCodeDistrictNumber, 43, 46) ||
      postCodeDistrictNumber === 50 ||
      isBetween(postCodeDistrictNumber, 60, 61) ||
      postCodeDistrictNumber === 90 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Rochester:
    return (
      isBetween(postCodeDistrictNumber, 1, 20) || postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.MiltonKeynes:
    return (
      isBetween(postCodeDistrictNumber, 1, 19) ||
      isBetween(postCodeDistrictNumber, 40, 46) ||
      postCodeDistrictNumber === 77
    );
  case UkPostCodeAreas.Motherwell:
    return isBetween(postCodeDistrictNumber, 1, 12);
  case UkPostCodeAreas.NorthLondon:
    return (
      isBetween(postCodeDistrictNumber, 1, 22) ||
      postCodeDistrictNumber === 81 ||
      postCodeDistrictNumber === 1
    );
  case UkPostCodeAreas.NewcastleUponTyne:
    return (
      isBetween(postCodeDistrictNumber, 1, 12) ||
      isBetween(postCodeDistrictNumber, 14, 49) ||
      isBetween(postCodeDistrictNumber, 61, 71) ||
      isBetween(postCodeDistrictNumber, 82, 83) ||
      postCodeDistrictNumber === 85 ||
      postCodeDistrictNumber === 88 ||
      postCodeDistrictNumber === 92 ||
      isBetween(postCodeDistrictNumber, 98, 99)
    );
  case UkPostCodeAreas.Nottingham:
    return (
      isBetween(postCodeDistrictNumber, 1, 25) ||
      isBetween(postCodeDistrictNumber, 33, 34) ||
      postCodeDistrictNumber === 70 ||
      postCodeDistrictNumber === 80 ||
      postCodeDistrictNumber === 90
    );
  case UkPostCodeAreas.Northampton:
    return (
      isBetween(postCodeDistrictNumber, 1, 18) || postCodeDistrictNumber === 29
    );
  case UkPostCodeAreas.Newport:
    return (
      postCodeDistrictNumber === 4 ||
      isBetween(postCodeDistrictNumber, 7, 8) ||
      isBetween(postCodeDistrictNumber, 10, 13) ||
      isBetween(postCodeDistrictNumber, 15, 16) ||
      isBetween(postCodeDistrictNumber, 18, 19) ||
      isBetween(postCodeDistrictNumber, 21, 26) ||
      postCodeDistrictNumber === 44
    );
  case UkPostCodeAreas.Norwich:
    return (
      isBetween(postCodeDistrictNumber, 1, 35) || postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.NorthWestLondon:
    return (
      isBetween(postCodeDistrictNumber, 1, 11) ||
      postCodeDistrictNumber === 26 ||
      postCodeDistrictNumber === 11
    );
  case UkPostCodeAreas.Oldham:
    return (
      isBetween(postCodeDistrictNumber, 1, 16) || postCodeDistrictNumber === 95
    );
  case UkPostCodeAreas.Oxford:
    return (
      isBetween(postCodeDistrictNumber, 1, 5) ||
      postCodeDistrictNumber === 7 ||
      isBetween(postCodeDistrictNumber, 9, 18) ||
      postCodeDistrictNumber === 20 ||
      isBetween(postCodeDistrictNumber, 25, 29) ||
      postCodeDistrictNumber === 33 ||
      postCodeDistrictNumber === 39 ||
      postCodeDistrictNumber === 44 ||
      postCodeDistrictNumber === 49
    );
  case UkPostCodeAreas.Paisley:
    return isBetween(postCodeDistrictNumber, 1, 19);
  case UkPostCodeAreas.Peterborough:
    return (
      isBetween(postCodeDistrictNumber, 1, 16) ||
      isBetween(postCodeDistrictNumber, 19, 38) ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Perth:
    return (
      isBetween(postCodeDistrictNumber, 1, 16) ||
      isBetween(postCodeDistrictNumber, 27, 29) ||
      isBetween(postCodeDistrictNumber, 45, 48) ||
      isBetween(postCodeDistrictNumber, 51, 99)
    );
  case UkPostCodeAreas.Plymouth:
    return (
      isBetween(postCodeDistrictNumber, 1, 35) || postCodeDistrictNumber === 95
    );
  case UkPostCodeAreas.Portsmouth:
    return (
      isBetween(postCodeDistrictNumber, 1, 22) ||
      isBetween(postCodeDistrictNumber, 30, 41)
    );
  case UkPostCodeAreas.Preston:
    return (
      isBetween(postCodeDistrictNumber, 0, 9) ||
      postCodeDistrictNumber === 11 ||
      isBetween(postCodeDistrictNumber, 25, 26)
    );
  case UkPostCodeAreas.Reading:
    return (
      isBetween(postCodeDistrictNumber, 1, 2) ||
      isBetween(postCodeDistrictNumber, 4, 10) ||
      postCodeDistrictNumber === 12 ||
      postCodeDistrictNumber === 14 ||
      isBetween(postCodeDistrictNumber, 17, 31) ||
      isBetween(postCodeDistrictNumber, 40, 42) ||
      postCodeDistrictNumber === 45
    );
  case UkPostCodeAreas.Redhill:
    return (
      isBetween(postCodeDistrictNumber, 1, 10) ||
      postCodeDistrictNumber === 12 ||
      postCodeDistrictNumber === 14 ||
      isBetween(postCodeDistrictNumber, 17, 20) ||
      postCodeDistrictNumber === 77
    );
  case UkPostCodeAreas.Romford:
    return isBetween(postCodeDistrictNumber, 1, 20);
  case UkPostCodeAreas.Sheffield:
    return (
      isBetween(postCodeDistrictNumber, 1, 14) ||
      isBetween(postCodeDistrictNumber, 17, 18) ||
      isBetween(postCodeDistrictNumber, 20, 21) ||
      isBetween(postCodeDistrictNumber, 25, 26) ||
      isBetween(postCodeDistrictNumber, 32, 33) ||
      isBetween(postCodeDistrictNumber, 35, 36) ||
      isBetween(postCodeDistrictNumber, 40, 45) ||
      postCodeDistrictNumber === 49 ||
      isBetween(postCodeDistrictNumber, 60, 66) ||
      isBetween(postCodeDistrictNumber, 70, 74) ||
      isBetween(postCodeDistrictNumber, 80, 81) ||
      isBetween(postCodeDistrictNumber, 95, 99)
    );
  case UkPostCodeAreas.Swansea:
    return (
      isBetween(postCodeDistrictNumber, 1, 20) ||
      isBetween(postCodeDistrictNumber, 31, 48) ||
      isBetween(postCodeDistrictNumber, 61, 73) ||
      postCodeDistrictNumber === 80 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.SouthEastLondon:
    return (
      isBetween(postCodeDistrictNumber, 1, 28) || postCodeDistrictNumber === 1
    );
  case UkPostCodeAreas.Stevenage:
    return isBetween(postCodeDistrictNumber, 1, 19);
  case UkPostCodeAreas.Stockport:
    return (
      isBetween(postCodeDistrictNumber, 1, 17) ||
      isBetween(postCodeDistrictNumber, 22, 23)
    );
  case UkPostCodeAreas.Slough:
    return (
      isBetween(postCodeDistrictNumber, 0, 9) ||
      postCodeDistrictNumber === 60 ||
      postCodeDistrictNumber === 95
    );
  case UkPostCodeAreas.Sutton:
    return isBetween(postCodeDistrictNumber, 1, 7);
  case UkPostCodeAreas.Swindon:
    return (
      isBetween(postCodeDistrictNumber, 1, 16) ||
      isBetween(postCodeDistrictNumber, 25, 26) ||
      postCodeDistrictNumber === 38 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Southampton:
    return (
      isBetween(postCodeDistrictNumber, 14, 25) ||
      isBetween(postCodeDistrictNumber, 30, 32) ||
      isBetween(postCodeDistrictNumber, 40, 43) ||
      postCodeDistrictNumber === 45 ||
      isBetween(postCodeDistrictNumber, 50, 53) ||
      postCodeDistrictNumber === 97
    );
  case UkPostCodeAreas.Salisbury:
    return isBetween(postCodeDistrictNumber, 1, 11);
  case UkPostCodeAreas.Sunderland:
    return (
      isBetween(postCodeDistrictNumber, 1, 9) || postCodeDistrictNumber === 43
    );
  case UkPostCodeAreas.SouthendOnSea:
    return (
      isBetween(postCodeDistrictNumber, 0, 9) ||
      isBetween(postCodeDistrictNumber, 11, 17) ||
      postCodeDistrictNumber === 22 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.StokeOnTrent:
    return (
      isBetween(postCodeDistrictNumber, 1, 21) || postCodeDistrictNumber === 55
    );
  case UkPostCodeAreas.SouthWestLondon:
    return (
      isBetween(postCodeDistrictNumber, 2, 20) ||
      postCodeDistrictNumber === 95 ||
      postCodeDistrictNumber === 1
    );
  case UkPostCodeAreas.Shrewsbury:
    return (
      isBetween(postCodeDistrictNumber, 1, 25) || postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Taunton:
    return isBetween(postCodeDistrictNumber, 1, 24);
  case UkPostCodeAreas.Galashiels:
    return isBetween(postCodeDistrictNumber, 1, 15);
  case UkPostCodeAreas.Telford:
    return isBetween(postCodeDistrictNumber, 1, 13);
  case UkPostCodeAreas.TunbridgeWells:
    return isBetween(postCodeDistrictNumber, 1, 40);
  case UkPostCodeAreas.Torquay:
    return isBetween(postCodeDistrictNumber, 1, 14);
  case UkPostCodeAreas.Truro:
    return isBetween(postCodeDistrictNumber, 1, 25);
  case UkPostCodeAreas.Cleveland:
    return isBetween(postCodeDistrictNumber, 1, 29);
  case UkPostCodeAreas.Twickenham:
    return isBetween(postCodeDistrictNumber, 1, 20);
  case UkPostCodeAreas.Southall:
    return (
      isBetween(postCodeDistrictNumber, 1, 11) || postCodeDistrictNumber === 18
    );
  case UkPostCodeAreas.WestLondon:
    return (
      isBetween(postCodeDistrictNumber, 2, 14) || postCodeDistrictNumber === 1
    );
  case UkPostCodeAreas.Warrington:
    return (
      isBetween(postCodeDistrictNumber, 1, 16) ||
      postCodeDistrictNumber === 55 ||
      postCodeDistrictNumber === 88
    );
  case UkPostCodeAreas.WesternCentralLondon:
    return (
      isBetween(postCodeDistrictNumber, 1, 2) || postCodeDistrictNumber === 1
    );
  case UkPostCodeAreas.Watford:
    return (
      isBetween(postCodeDistrictNumber, 3, 7) ||
      isBetween(postCodeDistrictNumber, 17, 19) ||
      isBetween(postCodeDistrictNumber, 23, 25) ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Wakefield:
    return (
      isBetween(postCodeDistrictNumber, 1, 17) ||
      postCodeDistrictNumber === 78 ||
      postCodeDistrictNumber === 90
    );
  case UkPostCodeAreas.Wigan:
    return isBetween(postCodeDistrictNumber, 1, 8);
  case UkPostCodeAreas.Worcester:
    return (
      isBetween(postCodeDistrictNumber, 1, 15) ||
      postCodeDistrictNumber === 78 ||
      postCodeDistrictNumber === 99
    );
  case UkPostCodeAreas.Walsall:
    return isBetween(postCodeDistrictNumber, 1, 15);
  case UkPostCodeAreas.Wolverhampton:
    return (
      isBetween(postCodeDistrictNumber, 1, 16) ||
      isBetween(postCodeDistrictNumber, 98, 99)
    );
  case UkPostCodeAreas.York:
    return (
      postCodeDistrictNumber === 1 ||
      isBetween(postCodeDistrictNumber, 7, 8) ||
      isBetween(postCodeDistrictNumber, 10, 26) ||
      isBetween(postCodeDistrictNumber, 30, 32) ||
      isBetween(postCodeDistrictNumber, 41, 43) ||
      postCodeDistrictNumber === 51 ||
      isBetween(postCodeDistrictNumber, 60, 62) ||
      isBetween(postCodeDistrictNumber, 90, 91)
    );
  default:
    return false;
}
