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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa rosei
const Mimosa_rosei = new Mimosa()
Mimosa_rosei.specificEpithet = 'rosei'

Mimosa_rosei.stems = new Stems()

Mimosa_rosei.stipule = new Stipule()
Mimosa_rosei.stipule.margin = new MarginStipule()
Mimosa_rosei.stipule.adaxial = new AdaxialStipule()
Mimosa_rosei.stipule.abaxial = new AbaxialStipule()

Mimosa_rosei.leaf = new Leaf()
Mimosa_rosei.leaf.petiole = new Petiole()
Mimosa_rosei.leaf.bipinnate = new Bipinnate()
Mimosa_rosei.leaf.bipinnate.rachis = new Rachis()
Mimosa_rosei.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rosei.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rosei.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rosei.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rosei.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rosei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 16)
Mimosa_rosei.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rosei.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rosei.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rosei.inflorescence = new Inflorescence()
Mimosa_rosei.inflorescence.peduncle = new Peduncle()
Mimosa_rosei.inflorescence.spicate = new Spicate()

Mimosa_rosei.flower = new Flower()
Mimosa_rosei.flower.bracteole = new Bracteole()
Mimosa_rosei.flower.merism = '5-merous'
Mimosa_rosei.flower.calyx = new Calyx()
Mimosa_rosei.flower.calyx.shape = 'campanulate'
Mimosa_rosei.flower.corolla = new Corolla()

Mimosa_rosei.androecium = new Androecium()
Mimosa_rosei.androecium.filaments = new Filaments()

Mimosa_rosei.ginoecium = new Ginoecium()
Mimosa_rosei.ginoecium.ovary = new Ovary()

Mimosa_rosei.fruit = new Fruit()
Mimosa_rosei.fruit.stipe = new Stipe()
Mimosa_rosei.fruit.replum = new Replum()
Mimosa_rosei.fruit.epicarp = new Epicarp()

Mimosa_rosei.seed = new Seed()


// Description authorship
Mimosa_rosei.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rosei.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa rosei
export { Mimosa_rosei }