import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F7F6',
  },

  listContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7F6',
  },

  hero: {
    marginTop: 20,
    marginBottom: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2F5D50',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 19,
    color: '#555555',
    lineHeight: 27,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555555',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#2F5D50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  listTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F5D50',
    marginBottom: 5,
  },

  listSubtitle: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 15,
  },

  list: {
    paddingBottom: 20,
  },

  locationCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 2,
  },

  locationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 7,
  },

  locationAddress: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 8,
  },

  locationInfo: {
    fontSize: 15,
    color: '#444444',
    marginBottom: 4,
  },

  locationPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F5D50',
    marginTop: 5,
  },

  readMore: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2F5D50',
    marginTop: 12,
  },

  detailCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginTop: 15,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
  },

  detailLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777777',
    marginTop: 12,
    marginBottom: 4,
  },

  detailValue: {
    fontSize: 17,
    color: '#222222',
    marginBottom: 5,
  },
detailHeader: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  width: '100%',
  marginBottom: 10,
},

contactInfo: {
  width: '35%',
  alignItems: 'flex-end',
},

contactTitle: {
  fontSize: 13,
  fontWeight: 'bold',
  color: '#2F5D50',
},

contactText: {
  fontSize: 10,
  color: '#555555',
  marginTop: 2,
},
detailTitle: {
  width: '65%',
  fontSize: 28,
  fontWeight: 'bold',
  color: '#2F5D50',
  paddingRight: 10,
},
});