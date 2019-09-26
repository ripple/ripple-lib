/**
 * Prefix for hashing functions.
 *
 * These prefixes are inserted before the source material used to
 * generate various hashes. This is done to put each hash in its own
 * "space." This way, two different types of objects with the
 * same binary data will produce different hashes.
 *
 * Each prefix is a 4-byte value with the last byte set to zero
 * and the first three bytes formed from the ASCII equivalent of
 * some arbitrary string. For example "TXN".
 */

 enum HashPrefix {
  // transaction plus signature to give transaction ID
  TX_ID = 0x54584E00, // 'TXN'

  // transaction plus metadata
  TX_NODE = 0x534E4400, // 'TND'

  // inner node in tree
  INNER_NODE = 0x4D494E00, // 'MIN'

  // inner node version 2
  INNER_NODE_V2 = 0x494E5200, // 'INR'

  // leaf node in tree
  LEAF_NODE = 0x4D4C4E00, // 'MLN'

  // inner transaction to sign
  TX_SIGN = 0x53545800, // 'STX'

  // inner transaction to sign (TESTNET)
  TX_SIGN_TESTNET = 0x73747800, // 'stx'

  // inner transaction to multisign
  TX_MULTISIGN = 0x534D5400, // 'SMT'

  // ledger
  LEDGER = 0x4C575200 // 'LWR'
}

export default HashPrefix
