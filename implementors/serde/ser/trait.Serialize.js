(function() {var implementors = {
"example_custom_events":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"example_custom_events/struct.RedactedPingEventContent.html\" title=\"struct example_custom_events::RedactedPingEventContent\">RedactedPingEventContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"example_custom_events/struct.AckEventContent.html\" title=\"struct example_custom_events::AckEventContent\">AckEventContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"example_custom_events/struct.PingEventContent.html\" title=\"struct example_custom_events::PingEventContent\">PingEventContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"example_custom_events/struct.RedactedAckEventContent.html\" title=\"struct example_custom_events::RedactedAckEventContent\">RedactedAckEventContent</a>"]],
"example_persist_session":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"example_persist_session/struct.FullSession.html\" title=\"struct example_persist_session::FullSession\">FullSession</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"example_persist_session/struct.ClientSession.html\" title=\"struct example_persist_session::ClientSession\">ClientSession</a>"]],
"matrix_sdk":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk/matrix_auth/struct.Session.html\" title=\"struct matrix_sdk::matrix_auth::Session\">Session</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk/enum.AuthSession.html\" title=\"enum matrix_sdk::AuthSession\">AuthSession</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk/matrix_auth/struct.SessionTokens.html\" title=\"struct matrix_sdk::matrix_auth::SessionTokens\">SessionTokens</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk/sliding_sync/enum.RoomListEntry.html\" title=\"enum matrix_sdk::sliding_sync::RoomListEntry\">RoomListEntry</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk/sliding_sync/enum.SlidingSyncMode.html\" title=\"enum matrix_sdk::sliding_sync::SlidingSyncMode\">SlidingSyncMode</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk/sliding_sync/enum.SlidingSyncListLoadingState.html\" title=\"enum matrix_sdk::sliding_sync::SlidingSyncListLoadingState\">SlidingSyncListLoadingState</a>"]],
"matrix_sdk_base":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_base/enum.RoomState.html\" title=\"enum matrix_sdk_base::RoomState\">RoomState</a>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_base/deserialized_responses/enum.RawSyncOrStrippedState.html\" title=\"enum matrix_sdk_base::deserialized_responses::RawSyncOrStrippedState\">RawSyncOrStrippedState</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: StaticStateEventContent + RedactContent + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    C::Redacted: RedactedStateEventContent,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_base/struct.RoomInfo.html\" title=\"struct matrix_sdk_base::RoomInfo\">RoomInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_base/enum.DisplayName.html\" title=\"enum matrix_sdk_base::DisplayName\">DisplayName</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_base/struct.SessionMeta.html\" title=\"struct matrix_sdk_base::SessionMeta\">SessionMeta</a>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_base/enum.MinimalStateEvent.html\" title=\"enum matrix_sdk_base::MinimalStateEvent\">MinimalStateEvent</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C::Redacted: RedactedStateEventContent + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    C: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + StateEventContent + RedactContent,</span>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_base/struct.RedactedMinimalStateEvent.html\" title=\"struct matrix_sdk_base::RedactedMinimalStateEvent\">RedactedMinimalStateEvent</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: RedactedStateEventContent + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_base/deserialized_responses/enum.RawAnySyncOrStrippedState.html\" title=\"enum matrix_sdk_base::deserialized_responses::RawAnySyncOrStrippedState\">RawAnySyncOrStrippedState</a>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_base/struct.OriginalMinimalStateEvent.html\" title=\"struct matrix_sdk_base::OriginalMinimalStateEvent\">OriginalMinimalStateEvent</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: StateEventContent + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_base/sync/struct.UnreadNotificationsCount.html\" title=\"struct matrix_sdk_base::sync::UnreadNotificationsCount\">UnreadNotificationsCount</a>"]],
"matrix_sdk_common":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_common/ring_buffer/struct.RingBuffer.html\" title=\"struct matrix_sdk_common::ring_buffer::RingBuffer\">RingBuffer</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_common/deserialized_responses/struct.SyncTimelineEvent.html\" title=\"struct matrix_sdk_common::deserialized_responses::SyncTimelineEvent\">SyncTimelineEvent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_common/deserialized_responses/enum.ShieldState.html\" title=\"enum matrix_sdk_common::deserialized_responses::ShieldState\">ShieldState</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_common/deserialized_responses/struct.EncryptionInfo.html\" title=\"struct matrix_sdk_common::deserialized_responses::EncryptionInfo\">EncryptionInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_common/deserialized_responses/enum.VerificationState.html\" title=\"enum matrix_sdk_common::deserialized_responses::VerificationState\">VerificationState</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_common/deserialized_responses/enum.DeviceLinkProblem.html\" title=\"enum matrix_sdk_common::deserialized_responses::DeviceLinkProblem\">DeviceLinkProblem</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_common/deserialized_responses/enum.VerificationLevel.html\" title=\"enum matrix_sdk_common::deserialized_responses::VerificationLevel\">VerificationLevel</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_common/deserialized_responses/enum.AlgorithmInfo.html\" title=\"enum matrix_sdk_common::deserialized_responses::AlgorithmInfo\">AlgorithmInfo</a>"]],
"matrix_sdk_crypto":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/struct.ReadOnlyOwnUserIdentity.html\" title=\"struct matrix_sdk_crypto::ReadOnlyOwnUserIdentity\">ReadOnlyOwnUserIdentity</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/struct.MediaEncryptionInfo.html\" title=\"struct matrix_sdk_crypto::MediaEncryptionInfo\">MediaEncryptionInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.CrossSigningStatus.html\" title=\"struct matrix_sdk_crypto::olm::CrossSigningStatus\">CrossSigningStatus</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/store/struct.GossipRequest.html\" title=\"struct matrix_sdk_crypto::store::GossipRequest\">GossipRequest</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/enum.RoomKeyBackupInfo.html\" title=\"enum matrix_sdk_crypto::types::RoomKeyBackupInfo\">RoomKeyBackupInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room_key_withheld/struct.CommonWithheldCodeContent.html\" title=\"struct matrix_sdk_crypto::types::events::room_key_withheld::CommonWithheldCodeContent\">CommonWithheldCodeContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/enum.LocalTrust.html\" title=\"enum matrix_sdk_crypto::LocalTrust\">LocalTrust</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/enum.EventEncryptionAlgorithm.html\" title=\"enum matrix_sdk_crypto::types::EventEncryptionAlgorithm\">EventEncryptionAlgorithm</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/struct.ReadOnlyDevice.html\" title=\"struct matrix_sdk_crypto::ReadOnlyDevice\">ReadOnlyDevice</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/forwarded_room_key/enum.ForwardedRoomKeyContent.html\" title=\"enum matrix_sdk_crypto::types::events::forwarded_room_key::ForwardedRoomKeyContent\">ForwardedRoomKeyContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/olm/enum.ShareInfo.html\" title=\"enum matrix_sdk_crypto::olm::ShareInfo\">ShareInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/room_key/enum.RoomKeyContent.html\" title=\"enum matrix_sdk_crypto::types::events::room_key::RoomKeyContent\">RoomKeyContent</a>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/olm_v1/struct.DecryptedOlmV1Event.html\" title=\"struct matrix_sdk_crypto::types::events::olm_v1::DecryptedOlmV1Event\">DecryptedOlmV1Event</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"matrix_sdk_crypto/types/events/trait.EventType.html\" title=\"trait matrix_sdk_crypto::types::events::EventType\">EventType</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/olm_v1/struct.ToDeviceCustomEvent.html\" title=\"struct matrix_sdk_crypto::types::events::olm_v1::ToDeviceCustomEvent\">ToDeviceCustomEvent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/forwarded_room_key/struct.UnknownRoomKeyContent.html\" title=\"struct matrix_sdk_crypto::types::events::forwarded_room_key::UnknownRoomKeyContent\">UnknownRoomKeyContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/requests/struct.ToDeviceRequest.html\" title=\"struct matrix_sdk_crypto::requests::ToDeviceRequest\">ToDeviceRequest</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.SigningKeys.html\" title=\"struct matrix_sdk_crypto::types::SigningKeys\">SigningKeys</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room_key/struct.MegolmV1AesSha2Content.html\" title=\"struct matrix_sdk_crypto::types::events::room_key::MegolmV1AesSha2Content\">MegolmV1AesSha2Content</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.PickledAccount.html\" title=\"struct matrix_sdk_crypto::olm::PickledAccount\">PickledAccount</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/olm_v1/struct.OlmV1Keys.html\" title=\"struct matrix_sdk_crypto::types::events::olm_v1::OlmV1Keys\">OlmV1Keys</a>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/struct.ToDeviceEvent.html\" title=\"struct matrix_sdk_crypto::types::events::ToDeviceEvent\">ToDeviceEvent</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"matrix_sdk_crypto/types/events/trait.EventType.html\" title=\"trait matrix_sdk_crypto::types::events::EventType\">EventType</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.PickledOutboundGroupSession.html\" title=\"struct matrix_sdk_crypto::olm::PickledOutboundGroupSession\">PickledOutboundGroupSession</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.EncryptionSettings.html\" title=\"struct matrix_sdk_crypto::olm::EncryptionSettings\">EncryptionSettings</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room_key_withheld/struct.UnknownRoomKeyWithHeld.html\" title=\"struct matrix_sdk_crypto::types::events::room_key_withheld::UnknownRoomKeyWithHeld\">UnknownRoomKeyWithHeld</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room_key_request/struct.RoomKeyRequestContent.html\" title=\"struct matrix_sdk_crypto::types::events::room_key_request::RoomKeyRequestContent\">RoomKeyRequestContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.MasterPubkey.html\" title=\"struct matrix_sdk_crypto::types::MasterPubkey\">MasterPubkey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.PickledSession.html\" title=\"struct matrix_sdk_crypto::olm::PickledSession\">PickledSession</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.ExportedRoomKey.html\" title=\"struct matrix_sdk_crypto::olm::ExportedRoomKey\">ExportedRoomKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.Signatures.html\" title=\"struct matrix_sdk_crypto::types::Signatures\">Signatures</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room_key/struct.UnknownRoomKey.html\" title=\"struct matrix_sdk_crypto::types::events::room_key::UnknownRoomKey\">UnknownRoomKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/struct.ReadOnlyUserIdentity.html\" title=\"struct matrix_sdk_crypto::ReadOnlyUserIdentity\">ReadOnlyUserIdentity</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/room_key_request/enum.Action.html\" title=\"enum matrix_sdk_crypto::types::events::room_key_request::Action\">Action</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room/encrypted/struct.UnknownEncryptedContent.html\" title=\"struct matrix_sdk_crypto::types::events::room::encrypted::UnknownEncryptedContent\">UnknownEncryptedContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/room_key_withheld/enum.RoomKeyWithheldContent.html\" title=\"enum matrix_sdk_crypto::types::events::room_key_withheld::RoomKeyWithheldContent\">RoomKeyWithheldContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room/encrypted/struct.RoomEncryptedEventContent.html\" title=\"struct matrix_sdk_crypto::types::events::room::encrypted::RoomEncryptedEventContent\">RoomEncryptedEventContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/enum.ToDeviceEvents.html\" title=\"enum matrix_sdk_crypto::types::events::ToDeviceEvents\">ToDeviceEvents</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/secret_send/struct.SecretSendContent.html\" title=\"struct matrix_sdk_crypto::types::events::secret_send::SecretSendContent\">SecretSendContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room_key_request/struct.MegolmV1AesSha2Content.html\" title=\"struct matrix_sdk_crypto::types::events::room_key_request::MegolmV1AesSha2Content\">MegolmV1AesSha2Content</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.PickledCrossSigningIdentity.html\" title=\"struct matrix_sdk_crypto::olm::PickledCrossSigningIdentity\">PickledCrossSigningIdentity</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/room/encrypted/enum.ToDeviceEncryptedEventContent.html\" title=\"enum matrix_sdk_crypto::types::events::room::encrypted::ToDeviceEncryptedEventContent\">ToDeviceEncryptedEventContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.BackedUpRoomKey.html\" title=\"struct matrix_sdk_crypto::olm::BackedUpRoomKey\">BackedUpRoomKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.PickledInboundGroupSession.html\" title=\"struct matrix_sdk_crypto::olm::PickledInboundGroupSession\">PickledInboundGroupSession</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/store/struct.TrackedUser.html\" title=\"struct matrix_sdk_crypto::store::TrackedUser\">TrackedUser</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/store/struct.RecoveryKey.html\" title=\"struct matrix_sdk_crypto::store::RecoveryKey\">RecoveryKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room/encrypted/struct.OlmV1Curve25519AesSha2Content.html\" title=\"struct matrix_sdk_crypto::types::events::room::encrypted::OlmV1Curve25519AesSha2Content\">OlmV1Curve25519AesSha2Content</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.UserSigningPubkey.html\" title=\"struct matrix_sdk_crypto::types::UserSigningPubkey\">UserSigningPubkey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/dummy/struct.DummyEventContent.html\" title=\"struct matrix_sdk_crypto::types::events::dummy::DummyEventContent\">DummyEventContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/store/struct.RoomKeyInfo.html\" title=\"struct matrix_sdk_crypto::store::RoomKeyInfo\">RoomKeyInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/room_key_request/enum.SupportedKeyInfo.html\" title=\"enum matrix_sdk_crypto::types::events::room_key_request::SupportedKeyInfo\">SupportedKeyInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/store/struct.RoomSettings.html\" title=\"struct matrix_sdk_crypto::store::RoomSettings\">RoomSettings</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/room_key_request/enum.RequestedKeyInfo.html\" title=\"enum matrix_sdk_crypto::types::events::room_key_request::RequestedKeyInfo\">RequestedKeyInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/enum.ReadOnlyUserIdentities.html\" title=\"enum matrix_sdk_crypto::ReadOnlyUserIdentities\">ReadOnlyUserIdentities</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/store/enum.SecretInfo.html\" title=\"enum matrix_sdk_crypto::store::SecretInfo\">SecretInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/struct.ToDeviceCustomEvent.html\" title=\"struct matrix_sdk_crypto::types::events::ToDeviceCustomEvent\">ToDeviceCustomEvent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.CrossSigningKey.html\" title=\"struct matrix_sdk_crypto::types::CrossSigningKey\">CrossSigningKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.MegolmV1AuthData.html\" title=\"struct matrix_sdk_crypto::types::MegolmV1AuthData\">MegolmV1AuthData</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room/encrypted/struct.MegolmV1AesSha2Content.html\" title=\"struct matrix_sdk_crypto::types::events::room::encrypted::MegolmV1AesSha2Content\">MegolmV1AesSha2Content</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.SelfSigningPubkey.html\" title=\"struct matrix_sdk_crypto::types::SelfSigningPubkey\">SelfSigningPubkey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.SignedKey.html\" title=\"struct matrix_sdk_crypto::types::SignedKey\">SignedKey</a>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room/struct.Event.html\" title=\"struct matrix_sdk_crypto::types::events::room::Event\">Event</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"matrix_sdk_crypto/types/events/trait.EventType.html\" title=\"trait matrix_sdk_crypto::types::events::EventType\">EventType</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/enum.OneTimeKey.html\" title=\"enum matrix_sdk_crypto::types::OneTimeKey\">OneTimeKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/room/encrypted/enum.RoomEventEncryptionScheme.html\" title=\"enum matrix_sdk_crypto::types::events::room::encrypted::RoomEventEncryptionScheme\">RoomEventEncryptionScheme</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.UnsignedDeviceInfo.html\" title=\"struct matrix_sdk_crypto::types::UnsignedDeviceInfo\">UnsignedDeviceInfo</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/olm/struct.OlmMessageHash.html\" title=\"struct matrix_sdk_crypto::olm::OlmMessageHash\">OlmMessageHash</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room_key_request/struct.UnknownRoomKeyRequest.html\" title=\"struct matrix_sdk_crypto::types::events::room_key_request::UnknownRoomKeyRequest\">UnknownRoomKeyRequest</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/room_key_withheld/struct.NoOlmWithheldContent.html\" title=\"struct matrix_sdk_crypto::types::events::room_key_withheld::NoOlmWithheldContent\">NoOlmWithheldContent</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto/types/events/room_key_withheld/enum.WithheldCode.html\" title=\"enum matrix_sdk_crypto::types::events::room_key_withheld::WithheldCode\">WithheldCode</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/struct.DeviceKeys.html\" title=\"struct matrix_sdk_crypto::types::DeviceKeys\">DeviceKeys</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/forwarded_room_key/struct.ForwardedMegolmV1AesSha2Content.html\" title=\"struct matrix_sdk_crypto::types::events::forwarded_room_key::ForwardedMegolmV1AesSha2Content\">ForwardedMegolmV1AesSha2Content</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto/types/events/forwarded_room_key/struct.ForwardedMegolmV2AesSha2Content.html\" title=\"struct matrix_sdk_crypto::types::events::forwarded_room_key::ForwardedMegolmV2AesSha2Content\">ForwardedMegolmV2AesSha2Content</a>"]],
"matrix_sdk_crypto_ffi":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto_ffi/struct.CrossSigningKeyExport.html\" title=\"struct matrix_sdk_crypto_ffi::CrossSigningKeyExport\">CrossSigningKeyExport</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto_ffi/struct.PickledSession.html\" title=\"struct matrix_sdk_crypto_ffi::PickledSession\">PickledSession</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto_ffi/struct.PickledAccount.html\" title=\"struct matrix_sdk_crypto_ffi::PickledAccount\">PickledAccount</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"matrix_sdk_crypto_ffi/enum.EventEncryptionAlgorithm.html\" title=\"enum matrix_sdk_crypto_ffi::EventEncryptionAlgorithm\">EventEncryptionAlgorithm</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto_ffi/struct.MigrationData.html\" title=\"struct matrix_sdk_crypto_ffi::MigrationData\">MigrationData</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto_ffi/struct.RoomSettings.html\" title=\"struct matrix_sdk_crypto_ffi::RoomSettings\">RoomSettings</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_crypto_ffi/struct.PickledInboundGroupSession.html\" title=\"struct matrix_sdk_crypto_ffi::PickledInboundGroupSession\">PickledInboundGroupSession</a>"]],
"matrix_sdk_store_encryption":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.164/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"matrix_sdk_store_encryption/struct.EncryptedValue.html\" title=\"struct matrix_sdk_store_encryption::EncryptedValue\">EncryptedValue</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()