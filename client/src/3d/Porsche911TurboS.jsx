import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { color } from 'framer-motion';

export function Porsche911({props, color}) {

  let bodyColor = color ; // soft off-white

  const { nodes, materials } = useGLTF('https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/car-models/porsche911Blender.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYXItbW9kZWxzL3BvcnNjaGU5MTFCbGVuZGVyLmdsYiIsImlhdCI6MTc0NDc1MzQ4OCwiZXhwIjoyMDYwMTEzNDg4fQ.tp_ptMDg5Msc7cuzxiGTbuFufUHbWb7jJqcTrfzfv-s')
  return (
      <group {...props} dispose={null} rotation={[0,3.8,0]} position={[0, -0.83, -0.5]}>
        {/* <group name="Sketchfab_model" position={[2.28, -0.83, -0.6]} rotation={[-Math.PI / 2, 0, 0]}> */}
        <group name="Sketchfab_model" position={[2.28, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group
          name="4dfb324c49be41728557ed99fef9dd07fbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <group name="body_circles" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="body_circles_body_main_0"
              castShadow
              receiveShadow
              geometry={nodes.body_circles_body_main_0.geometry}
              material={materials.body_main}
            />
            <mesh
              name="body_circles_invisible_all_0"
              castShadow
              receiveShadow
              geometry={nodes.body_circles_invisible_all_0.geometry}
              material={materials.invisible_all}
            />
          </group>
          <group name="door_1" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="body__door_1_body_main_0"
              castShadow
              receiveShadow
              geometry={nodes.body__door_1_body_main_0.geometry}
              material={materials.body_main}
              onrend
            />
            <mesh
              name="carbon__door_1_carbon_int_0"
              castShadow
              receiveShadow
              geometry={nodes.carbon__door_1_carbon_int_0.geometry}
              material={materials.carbon_int}
            />
            <mesh
              name="chrome_door_1_chrom_int_0"
              castShadow
              receiveShadow
              geometry={nodes.chrome_door_1_chrom_int_0.geometry}
              material={materials.chrom_int}
            />
            <mesh
              name="dynamics_door_1_dynamics_0"
              castShadow
              receiveShadow
              geometry={nodes.dynamics_door_1_dynamics_0.geometry}
              material={materials.dynamics}
            />
            <mesh
              name="leather_door_1_leather_int_0"
              castShadow
              receiveShadow
              geometry={nodes.leather_door_1_leather_int_0.geometry}
              material={materials.leather_int}
            />
            <mesh
              name="leather_door_1_leather_seam_0"
              castShadow
              receiveShadow
              geometry={nodes.leather_door_1_leather_seam_0.geometry}
              material={materials.leather_seam}
            />
            <mesh
              name="leathplast_door_1_pl_leather_int_0"
              castShadow
              receiveShadow
              geometry={nodes.leathplast_door_1_pl_leather_int_0.geometry}
              material={materials.pl_leather_int}
            />
            <mesh
              name="logo_door_1_LOGO1_0"
              castShadow
              receiveShadow
              geometry={nodes.logo_door_1_LOGO1_0.geometry}
              material={materials.LOGO1}
            />
            <mesh
              name="mirror_cover_door_1_monitor_0"
              castShadow
              receiveShadow
              geometry={nodes.mirror_cover_door_1_monitor_0.geometry}
              material={materials.monitor}
            />
            <mesh
              name="mirror_door_1_Mirror_0"
              castShadow
              receiveShadow
              geometry={nodes.mirror_door_1_Mirror_0.geometry}
              material={materials.Mirror}
            />
            <mesh
              name="plastic_door_1_bl_pl_M_int_0"
              castShadow
              receiveShadow
              geometry={nodes.plastic_door_1_bl_pl_M_int_0.geometry}
              material={materials.bl_pl_M_int}
            />
            <mesh
              name="plastic_exterior_door_1_bl_pl_M_ext_0"
              castShadow
              receiveShadow
              geometry={nodes.plastic_exterior_door_1_bl_pl_M_ext_0.geometry}
              material={materials.bl_pl_M_ext}
            />
            <mesh
              name="reflector_door_1_reflectors_0"
              castShadow
              receiveShadow
              geometry={nodes.reflector_door_1_reflectors_0.geometry}
              material={materials.reflectors}
            />
            <mesh
              name="reisin__door_1_reisin_0"
              castShadow
              receiveShadow
              geometry={nodes.reisin__door_1_reisin_0.geometry}
              material={materials.reisin}
            />
            <mesh
              name="screw_door_1_black_metal_0"
              castShadow
              receiveShadow
              geometry={nodes.screw_door_1_black_metal_0.geometry}
              material={materials.black_metal}
            />
            <mesh
              name="window_door_1_windows_0"
              castShadow
              receiveShadow
              geometry={nodes.window_door_1_windows_0.geometry}
              material={materials.windows}
            />
            <mesh
              name="window_door_1_windows_edge_0"
              castShadow
              receiveShadow
              geometry={nodes.window_door_1_windows_edge_0.geometry}
              material={materials.windows_edge}
            />
          </group>
          <group name="door_2" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="body_all_Ext_3_body_main_0"
              castShadow
              receiveShadow
              geometry={nodes.body_all_Ext_3_body_main_0.geometry}
              material={materials.body_main}
            />
            <mesh
              name="body_door_2_body_main_0"
              castShadow
              receiveShadow
              geometry={nodes.body_door_2_body_main_0.geometry}
              material={materials.body_main}
            />
            <mesh
              name="carbon__door_2_carbon_int_0"
              castShadow
              receiveShadow
              geometry={nodes.carbon__door_2_carbon_int_0.geometry}
              material={materials.carbon_int}
            />
            <mesh
              name="chrome__door_2_chrom_int_0"
              castShadow
              receiveShadow
              geometry={nodes.chrome__door_2_chrom_int_0.geometry}
              material={materials.chrom_int}
            />
            <mesh
              name="dynamic_door_2_dynamics_0"
              castShadow
              receiveShadow
              geometry={nodes.dynamic_door_2_dynamics_0.geometry}
              material={materials.dynamics}
            />
            <mesh
              name="leath_plast_door_2_pl_leather_int_0"
              castShadow
              receiveShadow
              geometry={nodes.leath_plast_door_2_pl_leather_int_0.geometry}
              material={materials.pl_leather_int}
            />
            <mesh
              name="leather_door_2_leather_int_0"
              castShadow
              receiveShadow
              geometry={nodes.leather_door_2_leather_int_0.geometry}
              material={materials.leather_int}
            />
            <mesh
              name="leather_door_2_leather_seam_0"
              castShadow
              receiveShadow
              geometry={nodes.leather_door_2_leather_seam_0.geometry}
              material={materials.leather_seam}
            />
            <mesh
              name="logo_door_2_LOGO1_0"
              castShadow
              receiveShadow
              geometry={nodes.logo_door_2_LOGO1_0.geometry}
              material={materials.LOGO1}
            />
            <mesh
              name="mirror_cover_door_2_monitor_0"
              castShadow
              receiveShadow
              geometry={nodes.mirror_cover_door_2_monitor_0.geometry}
              material={materials.monitor}
            />
            <mesh
              name="mirror_door_2_Mirror_0"
              castShadow
              receiveShadow
              geometry={nodes.mirror_door_2_Mirror_0.geometry}
              material={materials.Mirror}
            />
            <mesh
              name="plastic_door_2_bl_pl_M_int_0"
              castShadow
              receiveShadow
              geometry={nodes.plastic_door_2_bl_pl_M_int_0.geometry}
              material={materials.bl_pl_M_int}
            />
            <mesh
              name="plastic_exterior__door_2_bl_pl_M_ext_0"
              castShadow
              receiveShadow
              geometry={nodes.plastic_exterior__door_2_bl_pl_M_ext_0.geometry}
              material={materials.bl_pl_M_ext}
            />
            <mesh
              name="reflectors__door_2_reflectors_0"
              castShadow
              receiveShadow
              geometry={nodes.reflectors__door_2_reflectors_0.geometry}
              material={materials.reflectors}
            />
            <mesh
              name="reisin__door_2_reisin_0"
              castShadow
              receiveShadow
              geometry={nodes.reisin__door_2_reisin_0.geometry}
              material={materials.reisin}
            />
            <mesh
              name="screw_door_2_black_metal_0"
              castShadow
              receiveShadow
              geometry={nodes.screw_door_2_black_metal_0.geometry}
              material={materials.black_metal}
            />
            <mesh
              name="window_door_2_windows_0"
              castShadow
              receiveShadow
              geometry={nodes.window_door_2_windows_0.geometry}
              material={materials.windows}
            />
            <mesh
              name="window_door_2_windows_edge_0"
              castShadow
              receiveShadow
              geometry={nodes.window_door_2_windows_edge_0.geometry}
              material={materials.windows_edge}
            />
          </group>
          <group name="headlights_plastics" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="headlights_plastics_headlights_plastic_ring_0"
              castShadow
              receiveShadow
              geometry={nodes.headlights_plastics_headlights_plastic_ring_0.geometry}
              material={materials.headlights_plastic_ring}
            />
            <mesh
              name="headlights_plastics_hedlights_grid_0"
              castShadow
              receiveShadow
              geometry={nodes.headlights_plastics_hedlights_grid_0.geometry}
              material={materials.hedlights_grid}
            />
          </group>
          <group name="leather_all" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="leather_all_leather_int_0"
              castShadow
              receiveShadow
              geometry={nodes.leather_all_leather_int_0.geometry}
              material={materials.leather_int}
            />
            <mesh
              name="leather_all_leather_perforated_0"
              castShadow
              receiveShadow
              geometry={nodes.leather_all_leather_perforated_0.geometry}
              material={materials.leather_perforated}
            />
            <mesh
              name="leather_all_leather_seam_0"
              castShadow
              receiveShadow
              geometry={nodes.leather_all_leather_seam_0.geometry}
              material={materials.leather_seam}
            />
          </group>
          <group name="plastic_all" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="plastic_all_bl_pl_M_int_0"
              castShadow
              receiveShadow
              geometry={nodes.plastic_all_bl_pl_M_int_0.geometry}
              material={materials.bl_pl_M_int}
            />
            <mesh
              name="plastic_all_bl_pl_M_int_0001"
              castShadow
              receiveShadow
              geometry={nodes.plastic_all_bl_pl_M_int_0001.geometry}
              material={materials.bl_pl_M_int}
            />
            <mesh
              name="plastic_all_interior_grid_0"
              castShadow
              receiveShadow
              geometry={nodes.plastic_all_interior_grid_0.geometry}
              material={materials.interior_grid}
            />
          </group>
          <group name="wheel_rim" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="wheel_rim_rim_black_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel_rim_rim_black_0.geometry}
              material={materials.rim_black}
            />
            <mesh
              name="wheel_rim_rim_chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel_rim_rim_chrome_0.geometry}
              material={materials.rim_chrome}
            />
          </group>
          <group name="windows_main" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="windows_main_windows_0"
              castShadow
              receiveShadow
              geometry={nodes.windows_main_windows_0.geometry}
              material={materials.windows}              onBeforeRender={() => {
                materials.windows.alpha = 0.8; // soft off-white
              }}
            />
            <mesh
              name="windows_main_windows_edge_0"
              castShadow
              receiveShadow
              geometry={nodes.windows_main_windows_edge_0.geometry}
              material={materials.windows_edge}
            />
          </group>
          <mesh
            name="AO_tire_main_tires_0"
            castShadow
            receiveShadow
            geometry={nodes.AO_tire_main_tires_0.geometry}
            material={materials.tires}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="belts_all_belts_0"
            castShadow
            receiveShadow
            geometry={nodes.belts_all_belts_0.geometry}
            material={materials.belts}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="black_metal_all_black_metal_0"
            castShadow
            receiveShadow
            geometry={nodes.black_metal_all_black_metal_0.geometry}
            material={materials.black_metal}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="body_all_body_main_0"
            castShadow
            receiveShadow
            geometry={nodes.body_all_body_main_0.geometry}
            material={materials.body_main}
            rotation={[-Math.PI / 2, 0, 0]}
            onBeforeRender={() => {
                materials.body_main.color.set(bodyColor); // soft off-white
                materials.body_main.roughness = 0.5;
                materials.body_main.metalness = 0.6;
              }}
          />
          <mesh
            name="brakes_all_brakes_0"
            castShadow
            receiveShadow
            geometry={nodes.brakes_all_brakes_0.geometry}
            material={materials.brakes}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="carbon_all_carbon_int_0"
            castShadow
            receiveShadow
            geometry={nodes.carbon_all_carbon_int_0.geometry}
            material={materials.carbon_int}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="chrome_int_chrom_int_0"
            castShadow
            receiveShadow
            geometry={nodes.chrome_int_chrom_int_0.geometry}
            material={materials.chrom_int}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="discs_Discs_0"
            castShadow
            receiveShadow
            geometry={nodes.discs_Discs_0.geometry}
            material={materials.Discs}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="dynamics_all_dynamics_0"
            castShadow
            receiveShadow
            geometry={nodes.dynamics_all_dynamics_0.geometry}
            material={materials.dynamics}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="glossy_plastic_bl_pl__GL_int_ext_0"
            castShadow
            receiveShadow
            geometry={nodes.glossy_plastic_bl_pl__GL_int_ext_0.geometry}
            material={materials.bl_pl__GL_int_ext}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="headlights_flash_lights_0"
            castShadow
            receiveShadow
            geometry={nodes.headlights_flash_lights_0.geometry}
            material={materials.red_light_main}
            rotation={[-Math.PI / 2, 0, 0]}
            // onBeforeRender={() => {
            //     materials.red_light_main.emissiveIntensity = 50.9;
            //   }}
            
          >
            <meshStandardMaterial
    color="#e0e0e0"
    emissive="#ffffff"
    emissiveIntensity={0.5}
    roughness={0.7}
    metalness={0.2}
  />

          </mesh>
          <mesh
            name="lights_pattern_all_headlights_pattern_0"
            castShadow
            receiveShadow
            geometry={nodes.lights_pattern_all_headlights_pattern_0.geometry}
            material={materials.headlights_pattern}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="logo_all_LOGO1_0"
            castShadow
            receiveShadow
            geometry={nodes.logo_all_LOGO1_0.geometry}
            material={materials.LOGO1}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="metal_parts_rim_chrome_0"
            castShadow
            receiveShadow
            geometry={nodes.metal_parts_rim_chrome_0.geometry}
            material={materials.rim_chrome}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="mirror_middle_Mirror_0"
            castShadow
            receiveShadow
            geometry={nodes.mirror_middle_Mirror_0.geometry}
            material={materials.Mirror}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="monitors_seconds_monitor_0"
            castShadow
            receiveShadow
            geometry={nodes.monitors_seconds_monitor_0.geometry}
            material={materials.monitor}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="number_plate_number_plate1_0"
            castShadow
            receiveShadow
            geometry={nodes.number_plate_number_plate1_0.geometry}
            material={materials.number_plate1}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="pipes_pipes_chrom_0"
            castShadow
            receiveShadow
            geometry={nodes.pipes_pipes_chrom_0.geometry}
            material={materials.pipes_chrom}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="plast_leather_all_pl_leather_int_0"
            castShadow
            receiveShadow
            geometry={nodes.plast_leather_all_pl_leather_int_0.geometry}
            material={materials.pl_leather_int}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="plastic_exterior_bl_pl_M_ext_0"
            castShadow
            receiveShadow
            geometry={nodes.plastic_exterior_bl_pl_M_ext_0.geometry}
            material={materials.bl_pl_M_ext}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="red_light_back_red_light_main_0"
            castShadow
            receiveShadow
            geometry={nodes.red_light_back_red_light_main_0.geometry}
            material={materials.red_light_main}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="reflectors_all_reflectors_0"
            castShadow
            receiveShadow
            geometry={nodes.reflectors_all_reflectors_0.geometry}
            material={materials.reflectors}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="reisin_all_reisin_0"
            castShadow
            receiveShadow
            geometry={nodes.reisin_all_reisin_0.geometry}
            material={materials.reisin}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="rugs_all_rug_interior_0"
            castShadow
            receiveShadow
            geometry={nodes.rugs_all_rug_interior_0.geometry}
            material={materials.rug_interior}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="service_black_invisible_all_0"
            castShadow
            receiveShadow
            geometry={nodes.service_black_invisible_all_0.geometry}
            material={materials.invisible_all}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="steering_wheel_signs_pl_leather_int_0"
            castShadow
            receiveShadow
            geometry={nodes.steering_wheel_signs_pl_leather_int_0.geometry}
            material={materials.pl_leather_int}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="trans_covers_lights_0"
            castShadow
            receiveShadow
            geometry={nodes.trans_covers_lights_0.geometry}
            material={materials.lights}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="upholstery_all_upholstery_0"
            castShadow
            receiveShadow
            geometry={nodes.upholstery_all_upholstery_0.geometry}
            material={materials.upholstery}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="window_black_transparent_windows_dots_0"
            castShadow
            receiveShadow
            geometry={nodes.window_black_transparent_windows_dots_0.geometry}
            material={materials.windows_dots}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/car-models/porsche911Blender.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYXItbW9kZWxzL3BvcnNjaGU5MTFCbGVuZGVyLmdsYiIsImlhdCI6MTc0NDc1MzQ4OCwiZXhwIjoyMDYwMTEzNDg4fQ.tp_ptMDg5Msc7cuzxiGTbuFufUHbWb7jJqcTrfzfv-s')