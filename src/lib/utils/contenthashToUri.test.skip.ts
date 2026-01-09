import contenthashToUri, { hexToUint8Array } from './contenthashToUri'

// this test is skipped for now because importing CID results in
// TypeError: TextDecoder is not a constructor

describe('#contenthashToUri', () => {
  it('1inch.tokens.eth contenthash', () => {
    expect(contenthashToUri('0xe3010170122013e051d1cfff20606de36845d4fe28deb9861a319a5bc8596fa4e610e8803918')).toEqual(
      'ipfs://QmPgEqyV3m8SB52BS2j2mJpu9zGprhj2BGCHtRiiw2fdM1'
    )
  })
  it('sangbejo19.eth contenthash', () => {
    expect(contenthashToUri('0xd52dd26d0331223bb6bbdf03fb459b4caf41aca4d5e128b44268db139d58dfea')).toEqual('https://sangbejo19.eth.limo/#/swap?chain=polygon')
  })
})

describe('#hexToUint8Array', () => {
  it('common case', () => {
    expect(hexToUint8Array('0x010203fdfeff')).toEqual(new Uint8Array([1, 2, 3, 253, 254, 255]))
  })
})
