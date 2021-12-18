const style = {
  headerPortrait: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
  },
  headerLandscape: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 140px',
    marginTop: 80,
    justifyContent: 'space-between',
  },
  TextContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: '41vh',
  },
  TextContentTitle: {
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleParagraph: {
    width: '65%',
    fontSize: 16,
  },
  headerImageContainer: {
    margin: '20px 0',
  },
  HeaderImage: {
    borderRadius: 12,
    transform: 'scaleX(-1)',
  },
};
export default style;
