import headerImage from '../src/assets/new-pilates-header.png';

export function ScrollableHeader() {

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '1414 / 790',
        height: 'auto'
      }}
    >
      {/* ピラティス背景画像 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

    </div>
  );
}