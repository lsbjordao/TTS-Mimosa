// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa altoparanensis
const Mimosa_altoparanensis = new Mimosa()
Mimosa_altoparanensis.specificEpithet = 'altoparanensis'

Mimosa_altoparanensis.stems = new Stems()

Mimosa_altoparanensis.stipule = new Stipule()
Mimosa_altoparanensis.stipule.margin = new MarginStipule()
Mimosa_altoparanensis.stipule.adaxial = new AdaxialStipule()
Mimosa_altoparanensis.stipule.abaxial = new AbaxialStipule()

Mimosa_altoparanensis.leaf = new Leaf()
Mimosa_altoparanensis.leaf.petiole = new Petiole()
Mimosa_altoparanensis.leaf.bipinnate = new Bipinnate()
Mimosa_altoparanensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_altoparanensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_altoparanensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_altoparanensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 7)
Mimosa_altoparanensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_altoparanensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_altoparanensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_altoparanensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 36)
Mimosa_altoparanensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_altoparanensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_altoparanensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_altoparanensis.inflorescence = new Inflorescence()
Mimosa_altoparanensis.inflorescence.peduncle = new Peduncle()
Mimosa_altoparanensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_altoparanensis.flower = new Flower()
Mimosa_altoparanensis.flower.bracteole = new Bracteole()
Mimosa_altoparanensis.flower.calyx = new Calyx()
Mimosa_altoparanensis.flower.corolla = new Corolla()

Mimosa_altoparanensis.androecium = new Androecium()
Mimosa_altoparanensis.androecium.filaments = new Filaments()

Mimosa_altoparanensis.ginoecium = new Ginoecium()
Mimosa_altoparanensis.ginoecium.ovary = new Ovary()

Mimosa_altoparanensis.fruit = new Fruit()
Mimosa_altoparanensis.fruit.stipe = new Stipe()
Mimosa_altoparanensis.fruit.replum = new Replum()
Mimosa_altoparanensis.fruit.epicarp = new Epicarp()

Mimosa_altoparanensis.seed = new Seed()


// Description authorship
Mimosa_altoparanensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_altoparanensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa altoparanensis
export { Mimosa_altoparanensis }