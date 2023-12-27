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


// Description of Mimosa pseudotrachycarpa
const Mimosa_pseudotrachycarpa = new Mimosa()
Mimosa_pseudotrachycarpa.specificEpithet = 'pseudotrachycarpa'

Mimosa_pseudotrachycarpa.stems = new Stems()

Mimosa_pseudotrachycarpa.stipule = new Stipule()
Mimosa_pseudotrachycarpa.stipule.margin = new MarginStipule()
Mimosa_pseudotrachycarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_pseudotrachycarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_pseudotrachycarpa.leaf = new Leaf()
Mimosa_pseudotrachycarpa.leaf.petiole = new Petiole()
Mimosa_pseudotrachycarpa.leaf.bipinnate = new Bipinnate()
Mimosa_pseudotrachycarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_pseudotrachycarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(4)
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 10)
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(11)
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pseudotrachycarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pseudotrachycarpa.inflorescence = new Inflorescence()
Mimosa_pseudotrachycarpa.inflorescence.peduncle = new Peduncle()
Mimosa_pseudotrachycarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pseudotrachycarpa.flower = new Flower()
Mimosa_pseudotrachycarpa.flower.bracteole = new Bracteole()
Mimosa_pseudotrachycarpa.flower.merism = '4-merous'
Mimosa_pseudotrachycarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pseudotrachycarpa.flower.calyx = new Calyx()
Mimosa_pseudotrachycarpa.flower.calyx.shape = 'campanulate'
Mimosa_pseudotrachycarpa.flower.corolla = new Corolla()
Mimosa_pseudotrachycarpa.flower.corolla.shape = 'turbinate'

Mimosa_pseudotrachycarpa.androecium = new Androecium()
Mimosa_pseudotrachycarpa.androecium.filaments = new Filaments()

Mimosa_pseudotrachycarpa.ginoecium = new Ginoecium()
Mimosa_pseudotrachycarpa.ginoecium.ovary = new Ovary()

Mimosa_pseudotrachycarpa.fruit = new Fruit()
Mimosa_pseudotrachycarpa.fruit.stipe = new Stipe()
Mimosa_pseudotrachycarpa.fruit.replum = new Replum()
Mimosa_pseudotrachycarpa.fruit.epicarp = new Epicarp()

Mimosa_pseudotrachycarpa.seed = new Seed()


// Description authorship
Mimosa_pseudotrachycarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pseudotrachycarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pseudotrachycarpa
export { Mimosa_pseudotrachycarpa }