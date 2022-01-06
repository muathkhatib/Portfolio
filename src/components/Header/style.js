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
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5rem 0',
  },
  TextContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  TextContentTitle: {
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontWeight: '900',
    fontSize: '3.25rem',
    margin: '0 0 4rem 0',
  },
  titleParagraph: {
    width: '65%',
    fontSize: 16,
  },
  HeaderImage: {
    borderRadius: 12,
    transform: 'scaleX(-1)',
  },
};
export default style;
